package org.openmrs.module.spa;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpInputMessage;
import org.springframework.http.HttpOutputMessage;
import org.springframework.http.MediaType;
import org.springframework.http.MediaTypeFactory;
import org.springframework.http.converter.AbstractHttpMessageConverter;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;
import org.springframework.util.StreamUtils;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

/**
 * Spring's built-in converters did not seem to properly support all the MIME-types we need, so we have this basic
 * version of a MessageConverter. It should work for arbitrary Spring resources, but we limit it to those from this
 * module.
 */
public class SpaResourceConverter extends AbstractHttpMessageConverter<Resource> {

    protected SpaResourceConverter() {
        super(MediaType.ALL);
    }

    @Override
    protected boolean canRead(MediaType mediaType) {
        return false;
    }

    @Override
    protected boolean supports(@NonNull Class<?> clazz) {
        return SpaResourceLoader.FileSystemContextResource.class.isAssignableFrom(clazz);
    }

    @Override
    @NonNull
    protected Resource readInternal(@NonNull Class<? extends Resource> clazz, @NonNull HttpInputMessage inputMessage) throws IOException, HttpMessageNotReadableException {
        if (InputStreamResource.class.isAssignableFrom(clazz)) {
            return new InputStreamResource(inputMessage.getBody()) {
                @Override
                public String getFilename() {
                    return inputMessage.getHeaders().getContentDisposition().getFilename();
                }

                @Override
                public long contentLength() throws IOException {
                    long length = inputMessage.getHeaders().getContentLength();
                    return (length != -1 ? length : super.contentLength());
                }
            };
        }
        else {
            byte[] body = StreamUtils.copyToByteArray(inputMessage.getBody());
            return new ByteArrayResource(body) {
                @Override
                @Nullable
                public String getFilename() {
                    return inputMessage.getHeaders().getContentDisposition().getFilename();
                }
            };
        }
    }

    @Override
    protected void writeInternal(@NonNull Resource resource, @NonNull HttpOutputMessage outputMessage) throws IOException, HttpMessageNotWritableException {
        try {
            long lastModified = resource.getFile().lastModified();
            if (lastModified > 0) {
                outputMessage.getHeaders().setLastModified(lastModified);
            }
        } catch (IOException e) {
            // ignored
        }

        try {
            InputStream in = resource.getInputStream();
            // we don't use try-with-resources so that we can swallow any exception thrown when calling close()
            //noinspection TryFinallyCanBeTryWithResources
            try {
                StreamUtils.copy(in, outputMessage.getBody());
            }
            catch (NullPointerException ex) {
                // ignored
            }
            finally {
                try {
                    in.close();
                }
                catch (Throwable ex) {
                    // ignored
                }
            }
        }
        catch (FileNotFoundException ex) {
            // ignored
        }
    }

    @Override
    protected MediaType getDefaultContentType(@NonNull Resource resource) {
        return MediaTypeFactory.getMediaType(resource).orElse(MediaType.APPLICATION_OCTET_STREAM);
    }
}
