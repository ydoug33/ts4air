export class Ts2AbcError extends Error {
    constructor(public kind: Ts2AbcErrorKind)  {
        super(getErrorMessage(kind));
    }
}

export type Ts2AbcErrorKind = 'noTSConfig';

const errorMessages = new Map<Ts2AbcErrorKind, string>([
    ['noTSConfig', 'Unable to find tsconfig.json.'],
]);

function getErrorMessage(kind: Ts2AbcErrorKind): string {
    return errorMessages.get(kind);
}