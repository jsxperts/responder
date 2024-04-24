import { ResponseBuilder } from '../builders';

/**
 * Declaration merging to extend the Express Response interface with a 'builder' property.
 */
declare global {
    namespace Express {
        interface Response {
            builder: ResponseBuilder;
        }
    }
}
