//PRACTISE WORK!!!

//	1. Создайте переменную с именем myData и установите ее равной первому значению массива, используя скобочные обозначения и выведите значение в консоль.
	var myArray = [50,60,70];
	var myData = myArray[0];
	console.log(myData);

// 2. Измените данные, хранящиеся в индексе 0 myArray, на значение 45 и выведите массив в консоль
	var myArray = [18,64,99];
	var myData = myArray[0] = 45;
	console.log(myData);

// 3. Используя скобочные обозначения, выберите элемент из myArray так, чтобы myData был равен 8 и выведите в консоль.
	var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
	var myData = myArray [2][1];
	console.log(myData);

// 4. Добавте ["dog", 3] в конец переменной myArray и выведите в консоль.
	var myArray = [["John", 23], ["cat", 2]];
	myArray.push(["dog", 3]);
	console.log(myArray);

// 5. Используйте функцию .pop () чтоб удалить последний элемент из myArray. Удаленное значение запишите в removedFromMyArray и выведите его в консоль.
	var myArray = [["John", 23], ["cat", 2]];

	var removedFromMyArray = myArray.pop();

	console.log("Удаленный элемент: " + removedFromMyArray);

// 6. Используйте функцию .shift (), чтобы удалить первый элемент из myArray, присваивая удаленное значение для removeFromMyArray и выведите его в консоль.
	var myArray = [["John", 23], ["dog", 3]];
	var removedFromMyArray = myArray.shift();
	console.log("Удаленный элемент: " + removedFromMyArray);

// 7. Добавьте ["Paul", 35] в начало переменной myArray, используя unshift ().
		var myArray = [["John", 23], ["dog", 3]];
		var newElement = myArray.unshift(["Paul", 35]);
		console.log(myArray);

// 8. Создайте список покупок в переменной myList. Список должен быть многомерным массивом, содержащим несколько подмассивов.
		var myList = [["Яблоко", 20]];
		myList.push(["Банан", 3]);
		myList.push(["Груша", 7]);
		myList.push(["Мандарин", 12]);
		myList.push(["Апельсин", 7]);
		myList.push(["Гранат", 19]);
		console.log(myList);
		for (var i=0; i < myList.length; i++) {
			console.log(myList[i][0]);
		}

//HOME WORK 3!!!
//1. Сделать собственные примеры методов применяемых для массивов.

//JOIN!!!
	console.log("JOIN!!!");

	var animals = ["камаз", "зил", "газ", "юмз"];
	console.log("before join");
	console.log(animals);

	var changedArray = animals.join(" ");

	console.log("after join")
	console.log(changedArray);

	var newArray = changedArray.split(" ");
	console.log("after split")
	console.log(newArray);

//CONCAT!!!
	console.log("CONCAT!!!");

	var animals = ["камаз", "зил", "газ", "юмз"];
	var materials = ["песок", "гравий", "щебень"]
	var procesing = animals.concat(materials);
	console.log(procesing);  

	var materials = materials.concat("гранит", "отсев");
	console.log(materials); 

//REVERSE!!!
	console.log("REVERSE!!!");

	var animals = ["cat", "dog", "pig", "chick", "duck", "mouse", "ship"];	
	console.log("before reverse: " + animals);

	var animals = animals.reverse(); 
	console.log("after reverse: " + animals);

// SLICE!!!
	console.log("SLICE!!!");

	var animals = ["cat", "dog", "pig", "duck", "ship"];
	console.log(animals);

	var piece = animals.slice(1, 2); 
	console.log("array after slice(1, 2): " + piece);

	var piece = animals.slice(3);    
	console.log("array after slice(3): " + piece);

	var piece = animals.slice(0, -3);    
	console.log("array after slice(0, -3): " + piece);

	var piece = animals.slice(2, -2);
	console.log("array after slice(2, -2): " + piece);

	var piece = animals.slice(3);    
	console.log("array after slice(3): " + piece);

// SPLICE!!!
	console.log("SPLICE!!!");

	var animals = ["cat", "dog", "pig", "duck", "ship"];
	console.log("Исходный массив: " + animals);

	//DELETE:
	var del = animals.splice (0, 3);
	console.log("Удалены: " + del);
	console.log("Остались: " + animals);

	//ADD:
	var del = animals.splice (5, 0, "chick", "mouse");
	console.log("Удалены: " + del);
	console.log("Остались: " + animals);

// SORT!!!
	console.log("SORT!!!");

	var numbers = [4, -2, 23, 575, 45, 555, 788, 6, 9099];
	console.log(numbers);
	console.log("**************");

	numbers.sort();
	console.log(numbers);

	var letters = ["z", "b", "ZD", "cR"];
	console.log(letters);
	console.log("**************");
	letters.sort();
	console.log(letters);

//PUSH!!!
	console.log("PUSH!!!");

	var stack = ["cat", "dog"];
	console.log("Исходный массив: " + stack);
	console.log("Размер массива: " + stack.length);

	var new_length = stack.push("pig");
	console.log("После добавления: " + stack);
	console.log("Размер массива: " + new_length);

	console.log("************************");

	var new_length = stack.push("duck", "ship");
	console.log("После добавления: " + stack);
	console.log("Размер массива: " + new_length);

//POP!!!
	console.log("POP!!!");

	var stack = [4, -2, 23, 575, 45, 555, 788, 6, 9099];

	console.log("Исходный массив: " + stack);
	console.log("Размер массива: " + stack.length);

	var deletedElement = stack.pop();

	console.log("Массив после удаления: " + stack);
	console.log("Размер массива: " + stack.length);
	console.log("Удаленный элемент: " + deletedElement);

//UNSHIFT!!! 
	console.log("UNSHIFT!!!");

	var animals = ["cat", "dog", "pig", "duck", "ship"];
	console.log("Исходный массив: " + animals);

	console.log("**********************");

	var newLength = animals.unshift("rabit");
	console.log("Массив после добавления rabit: " + animals);
	console.log("Размер нового массива: " + newLength);

	console.log("**********************");

	var newLength = animals.unshift("frog", "tiger", "lion");
	console.log("Массив после добавления frog, tiger, lion: " + animals);
	console.log("Размер нового массива: " + newLength);

//SHIFT!!! 
	console.log("SHIFT!!!");

	var animals = ["cat", "dog", "pig", "duck", "ship"];
	console.log("Исходный массив: " + animals);
	
	var deleteValue = animals.shift();
	console.log("Массив после удаления: " +animals + " первый элемент до удаления - " +animals[0]);

	console.log("**********************");

	console.log("Удаленное значение: " + deleteValue );

// 2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.
	var elements = [0, 1, 2, 3, 4];
	var element = +prompt("Введите новый элемент :");
	var number = +prompt("Введите значение элемента, после которого Вы хотите вставить новый элемент :");
	elements.splice(number, 0, element);
	console.log(elements);

// 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. Размер каждого вложенного массива - 3.
	var a = +prompt("Введите размер массива :");
	var array = new Array(a);
		for (var i = 0; i < a; i++) {
			if (i%2 === 0){
				array[i] = ["even", "even", "even"]
			}
			else {
				array[i] = ["odd", "odd", "odd"]
			}
	document.write(array[i] + "<br/>");
			}
	
// 4. Создать два произвольных массива: один массив - любимая спортивная команда / модели автомобилей / города, во втором - количество игроков в команде / объем двигателя / количество жителей в городе. Объединить данные из двух массивов и вывести их в одну строку. 
	var value1 = ["Real Madrid", "Ford", "Kiev"];
	var value2 = [11, 2.5, 3000000];
	var result = "";
		for (i=0; i < value1.length; i++){
			result = result + (value1[i] + ' = ' + value2[i] + ', ');
		}
	document.write(result);
