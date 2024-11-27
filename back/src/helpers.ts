export function ApplyDtoToModel(dto, model) {
    Object.keys(dto).forEach(function (key) {
        if (key.endsWith("_id")) {
            return
        }
        model[key] = dto[key];
    });
}
