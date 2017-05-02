Сортировщик карточек путешественника

Формат входных данных в виде массива, каждый элемент масива является описанием карточки
```js
var arr_card = [
"From Gerona Airport, take flight SK455 to Stockholm. Gate 45B. Seat 3A. Baggage drop at ticket counter 344.",
"Take the airport bus from Barcelona to Gerona Airport. No seat assignment.",
"Take train 78A from Madrid to Barcelona. Seat 45B.", 
"From Stockholm, take flight SK22 to New York JFK. Gate 22. Seat 7B. Baggage will be automatically transferred from your last leg." 
 ];
 ```
 
Формат выходных данных в виде отсортированных строк (str)
```html
<div class="block_for_card"><li>Take train 78A from Madrid to Barcelona. Seat 45B.</div>
<div class="block_for_card"><li>Take the airport bus from Barcelona to Gerona Airport. No seat assignment.</div>
<div class="block_for_card"><li>From Gerona Airport, take flight SK455 to Stockholm. Gate 45B. Seat 3A. Baggage drop at ticket counter 344.</div>
<div class="block_for_card"><li>From Stockholm, take flight SK22 to New York JFK. Gate 22. Seat 7B. Baggage will be automatically transferred from your last leg.</div>
```
