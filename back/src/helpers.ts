export function ApplyDtoToModel(dto, model) {
    Object.keys(dto).forEach(function (key) {
        model[key] = dto[key];
    });
}
