export function update({response, request, database}){
    const { id } = request.params;
    const {equipment, description } = request.body;

    console.log(id)
    return response.end();
}