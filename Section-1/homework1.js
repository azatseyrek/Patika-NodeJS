//perimeter and area of a circle

// console.log(Math.PI);

const rCon = parseInt(process.argv.splice(2))

const area = (r) => {
    return (Math.PI.toFixed(2) * r* r)
}
console.log(`Yaricapi: ${rCon} olan dairenin Alani: ${area(rCon)} Cevresi: ${2*Math.PI.toFixed(2) * rCon} `);
