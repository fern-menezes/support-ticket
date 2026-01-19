export function remove({response, request, database}){
    const { id } = request.params;

    database.delete("tickets", id)
    return response.end("Deletado com sucesso");
}