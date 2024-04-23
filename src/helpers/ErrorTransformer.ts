/**
 * Utility class for transforming Error objects into JSON-compatible objects.
 * @class ErrorTransformer
 */
export class ErrorTransformer {
    /**
     * Transforms an Error object into a JSON-compatible object.
     * @param error The Error object to transform.
     * @param stackTrace Whether to include the error stack stackTrace.
     * @param debug Whether to include all properties of the error object.
     * @returns A JSON-compatible object representing the error.
     */
    static transform(
        error: Error,
        stackTrace: boolean = true,
        debug: boolean = false
    ): Record<string, unknown> {
        const errorData: Record<string, unknown> = {};

        // If debug mode is enabled, include all properties of the error object
        if (debug) {
            Object.getOwnPropertyNames(error).forEach((prop: string): void => {
                errorData[prop] = (error as unknown as Record<string, unknown>)[
                    prop
                ];
            });
        } else {
            const customError: Record<string, unknown> =
                error as unknown as Record<string, unknown>;

            // If debug mode is disabled, include only specific properties
            errorData.code = customError.code as string | number | undefined;
            errorData.message = error.message;

            // Include the stack stackTrace if 'stackTrace' option is enabled
            if (stackTrace) {
                errorData.stack = error.stack;
            }
        }

        return errorData;
    }
}
