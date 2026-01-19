
export function updateStatus({response, request, database}){
     const { id } = request.params;
     const { solution } = request.body;

      database.update("tickets", id, {
        status: "closed",
        solution,
    })
    return response.end("Ticket encerrado com sucesso ✅");
}