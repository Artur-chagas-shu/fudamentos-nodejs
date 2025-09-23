const args = process.argv

const namedArguments =  {}

process.argv.slice(2).forEach((arg, index, array)=> {
    if (arg.startsWith('--')) {
        const argName = arg.slice(2)
        const argVelue = array[index + 1]
        namedArguments[argName] = argVelue
    }
})

console.log('Argumentos informados: ', namedArguments)