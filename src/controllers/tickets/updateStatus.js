
export function updateStatus({response, request, database}){
     const { id } = request.params;

      database.update("tickets", id, {
        status: "closed",
    })
    return response.end("Atualizado com sucesso ✅");
}