// Неупорядочный массив на вход, каждый элемент массива является карточкой.
// Можно добовлять сколько угодно карточек в масив
var arr_card = [
"From Gerona Airport, take flight SK455 to Stockholm. Gate 45B. Seat 3A. Baggage drop at ticket counter 344.",
"Take the airport bus from Barcelona to Gerona Airport. No seat assignment.",
"Take train 78A from Madrid to Barcelona. Seat 45B.", 
"From Stockholm, take flight SK22 to New York JFK. Gate 22. Seat 7B. Baggage will be automatically transferred from your last leg." 
 ];

// Необходимо указать начальную точку ( значение value )
var value = "Madrid";
var kolichestvo_cards = arr_card.length;
var is = "from ";
var b_is = "From ";
var v = "to ";
var backspace = "\u0020";
var tochka = "\u002E";
var zapitaia = "\u002C";

// Сортировка
for (i = 0; i < kolichestvo_cards; i++) {
	// Работаем со строкой str, помещаем в str i-ый элемент массива
	str = arr_card[i];
	// Ищем в str ключевые слова from или From + значение value ( в первом случии Madrid )
	// Если не найденно i++
	if (~str.indexOf(is + value) || ~str.indexOf(b_is + value)) {
			
		var str_city_s = "";
		var str_city_v = "";
		var num = 0;
		// num позиция вхождения ключевого слова from + значения value
		num = str.indexOf(is + value);
		num = num + 5;
			// Определяет значение str_city_s, заносит в него город из которого идет отправление
			// В первом случии str_city_s = Madrid
			for(num; num < str.length; num++){
				//проверка на пробел, точку, запятую
				if (str[num]==backspace || str[num]==tochka || str[num]==zapitaia) break;
			 	str_city_s = str_city_s + str[num];
				}
			// Поиск ключевого слова to 		
			for (num; num < str.length; num++){
				if (num == str.indexOf(v)) break;
			}
		
		num = num + 3;
			// Определяет значение str_city_v, заносит в него город в который идет отправление
			// В первом случии str_city_v =	Barcelona
			for(num; num < str.length; num++){
				if (str[num]==backspace || str[num]==tochka || str[num]==zapitaia) break; 
					str_city_v = str_city_v + str[num];		
			}
			// Заносит в значение value новый город для дальнейшего пойска и сортировки
			value = str_city_v;	
		i = -1;
		// Выводит отсортированный список
		document.getElementById("conteiner");
		conteiner.insertAdjacentHTML('beforeend', '<div class="block_for_card"><li>'+ str + '</div>');
	}
	else {}
}