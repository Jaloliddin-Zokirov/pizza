// ----------------- Bread ---------------

let elSelect = document.querySelector('.js-select');
let elBread = document.querySelector('.js-bread');

elSelect.addEventListener('click', function (evt) {
	evt.preventDefault();
	let elSelectVal = elSelect.value;
	if (elSelectVal == `qalin`) {
		elBread.textContent = `Qalin`;
	} else if (elSelectVal == `ortacha`) {
		elBread.textContent = `O'rtacha`;
	} else if (elSelectVal == `yuqa`) {
		elBread.textContent = `Yuqa`;
	}
});

// ----------------- Size ---------------

let elSizeOne = document.querySelector('.js-size');
let elSizeTwo = document.querySelector('.js-size-two');
let elSizeThere = document.querySelector('.js-size-there');
let elTextSize = document.querySelector('.js-text-size');
let elSpan = document.querySelector('.js-span');
let elSpanTwo = document.querySelector('.js-span-two');
let elSpanThere = document.querySelector('.js-span-there');

elSizeOne.addEventListener('click', function (evt) {
	evt.preventDefault();

	let elSizeCheck = elSizeOne.checked;
	if (elSizeCheck == true) {
		elTextSize.textContent = `25 cm`;
		elSpan.classList.add('one');
		elSpanTwo.classList.remove('two');
		elSpanThere.classList.remove('there');
	}
});
elSizeTwo.addEventListener('click', function (evt) {
	evt.preventDefault();

	let elSizeCheck = elSizeTwo.checked;
	if (elSizeCheck == true) {
		elTextSize.textContent = `30 cm`;
		elSpanTwo.classList.add('two');
		elSpan.classList.remove('one');
		elSpanThere.classList.remove('there');
	}
});
elSizeThere.addEventListener('click', function (evt) {
	evt.preventDefault();

	let elSizeCheck = elSizeThere.checked;
	if (elSizeCheck == true) {
		elTextSize.textContent = `35 cm`;
		elSpanThere.classList.add('there');
		elSpanTwo.classList.remove('two');
		elSpan.classList.remove('one');
	}
});

// ----------------- Over ---------------

let elList = document.querySelector('.valueList');
let elCheckbox = document.querySelectorAll('.js-checkbox');
let list = [];

for (var item of elCheckbox) {
	item.addEventListener('click', function () {
		if (this.checked == true) {
			list.push(this.value);
			elList.innerHTML = list.join(' / ');
		} else {
			list = list.filter((el) => el !== this.value);
			elList.innerHTML = list;
		}
	});
}

// ----------------- Addition ---------------

let elAdditionList = document.querySelector('.addition');
let elAddition = document.querySelectorAll('.js-addition');
let additionList = [];

for (var items of elAddition) {
	items.addEventListener('click', function () {
		if (this.checked == true) {
			additionList.push(this.value);
			elAdditionList.innerHTML = additionList.join(' / ');
		} else {
			additionList = additionList.filter((el) => el !== this.value);
			elAdditionList.innerHTML = additionList;
		}
	});
}
