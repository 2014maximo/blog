export const KOTLIN_ELEMENTOS_VAR = `
var myVariable = 42
myVariable = 50

val myConstant = 42 //CONSTANTES`;

export const KOTLIN_ELEMENTOS_VAR_IMPLICIT = `
val explicitDouble: Double = 70.0`;

export const KOTLIN_ELEMENTOS_COERCION_IMPLICIT = `
val label = "The width is "
val width = 94
val widthLabel = label + width`;

export const KOTLIN_ELEMENTOS_INTER_CADENAS = `
val apples = 3
val oranges = 5
val fruitSummary = "I have $\{apples + oranges} " +
                   "pieces of fruit."`;

export const KOTLIN_ELEMENTOS_OPER_RANGO = `
val names = arrayOf("Anna", "Alex", "Brian", "Jack")
val count = names.count()
for (i in 0..count - 1) {
    println("Person $\{i + 1} is called $\{names[i]}")
}
// Person 1 is called Anna
// Person 2 is called Alex
// Person 3 is called Brian
// Person 4 is called Jack`;

export const KOTLIN_ELEMENTOS_OPER_RANGO_INCLUS = `
for (index in 1..5) {
    println("$index times 5 is $\{index * 5}")
}
// 1 times 5 is 5
// 2 times 5 is 10
// 3 times 5 is 15
// 4 times 5 is 20
// 5 times 5 is 25`;

export const KOTLIN_ELEMENTOS_ARRAYS = `
val shoppingList = arrayOf("catfish", "water",
    "tulips", "blue paint")
shoppingList[1] = "bottle of water"`;

export const KOTLIN_ELEMENTOS_MAPS = `
val occupations = mutableMapOf(
    "Malcolm" to "Captain",
    "Kaylee" to "Mechanic"
)
occupations["Jayne"] = "Public Relations"`;

export const KOTLIN_ELEMENTOS_C_VACIAS = `
val emptyArray = arrayOf<String>()
val emptyMap = mapOf<String, Float>()`;