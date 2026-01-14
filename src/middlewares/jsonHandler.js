/* A requisição HTTP chega em partes (chunks), que são pedaços de dados binários.
Cada chunk é armazenado no array 'buffers'. Como o Node.js trabalha de forma assíncrona e com streams, os dados não vêm todos de uma vez, mas sim em blocos.
Ao final, usamos Buffer.concat(buffers) para juntar todos esses pedaços em um único buffer contínuo. Em seguida, transformamos esse buffer em string para interpretar o conteúdo como JSON e atribuí-lo ao request.body.
*/

export async function jsonHandler(request, response){
    const buffers = []

    for await (const chunk of request){
        buffers.push(chunk)
    }

    try{
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch(error){
        request.body = null
    }

    response.setHeader("Content-Type", "application/json")
}