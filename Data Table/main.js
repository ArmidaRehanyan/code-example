//1// Add to DOM

function DataTable(sortable, searchable) {


    let arr = [];
    let allData = [];
    let ZtoA = false;
    const windThis = this;
    let matched = false;
    const load = document.querySelector('#load');
    const select = document.querySelector("select");
    const prevBut = document.querySelector('#prev');
    const nextBut = document.querySelector('#next');
    const searchInput = document.querySelector('#search')
    const pageNumBut = document.querySelector('#pageNum');
    const searchBut = document.querySelector('#searchBut');
    const container = document.querySelector('.container');
    const tableDataBlock = document.querySelector('.table__data');
    let thisObj = this;
    this.sortable = sortable;
    this.searchable = searchable;


    this.getRequest = function (url) {
        return new Promise((resolve, reject) => {

            const xhr = new XMLHttpRequest();

            xhr.open('GET', url);
            xhr.responseType = 'json';
            xhr.onload = () => {
                xhr.status >= 400 ? reject(xhr.response) : resolve(xhr.response)
            }
            xhr.onerror = () => {
                reject(xhr.response);
            }
            xhr.send();
        })
    }

    this.drawTable = function (data) {

        //Creating the thead
        function createThead(data) {

            let thead, tableStr = '';

            for (let i = 0; i < data.length; i++) {
                thead = Object.keys(data[i]);
            }

            tableStr += `<table>\n\n  <thead>\n\n   <tr>\n   `;

            for (let i = 0; i < thead.length; i++) {
                if (thisObj.sortable === true) {
                    tableStr += `  <th onclick="sortFunc(${[i]})"> ${thead[i]} </th>\n   `;
                } else if (thisObj.sortable === false) {
                    tableStr += `  <th onclick=""> ${thead[i]} </th>\n   `;
                }
            }

            tableStr += `</tr>\n\n </thead>`;

            return tableStr;

        }


        //Creating the tbody
        function createTbody(data) {

            let tbody, tableStr = '';

            tableStr += `\n\n <tbody>  \n\n   `;

            for (let i = 0; i < data.length; i++) {

                tbody = Object.values(data[i]);
                tableStr += `<tr>\n   `;

                for (let j = 0; j < tbody.length; j++) {

                    if (tbody[j] instanceof Object) {

                        tableStr += `  <td>\n\n${createTbody(tbody[j])} </td>\n   `;

                    } else {
                        tableStr += `  <td> ${tbody[j]} </td>\n   `;
                    }

                }

                tableStr += `</tr>\n   `;
            }

            tableStr += `\n </tbody>\n\n</table>`;

            return tableStr;

        }

        return createThead(data) + createTbody(data);
    }


    this.getRequestFunc = function (startNum = 0, limitValue = 10) {

        let url = `https://jsonplaceholder.typicode.com/posts?_start=${startNum}&_limit=${limitValue}`;

        container.style.opacity = '0.5';
        load.style.display = 'block';

        thisObj.getRequest(url)
            .then(function (data) {
                let tableStr = thisObj.drawTable(data);
                return tableDataBlock.innerHTML = tableStr;
            })
            .then(function () {

                setTimeout(function () {
                    load.style.display = 'none';
                    container.style.opacity = '1';
                }, 1000)

            })
            .catch(err => console.log(err));
    }

    let startNum = 0;

    select.addEventListener('change', function () {

        let limitValue = this.value;

        pageNumBut.innerHTML = '1';
        pageNumBut.value = '1';

        if (searchInput.value === '') {
            thisObj.getRequestFunc(0, limitValue);
            thisObj.checkPageNumButValue(Math.ceil(allData[0].length / limitValue));
        } else if (searchInput.value !== '') {
            load.style.display = 'block';
            container.style.opacity = '0.5';
            setTimeout(function () {
                load.style.display = 'none';
                container.style.opacity = '1';

                // tableDataBlock.innerHTML = createThead(arr.slice(0, (parseInt(limitValue)))) + createTbody(arr.slice(0, (parseInt(limitValue))));
                // thisObj.checkPageNumButValue(Math.ceil((arr.length) / (parseInt(select.value))));
                let callArrLimit;

                if (arr.length < select.value) {
                    nextBut.style.backgroundColor = 'gray';
                    nextBut.setAttribute('disabled', 'disabled');
                    callArrLimit = arr.slice(0, (arr.length));
                } else {
                    nextBut.style.backgroundColor = '#3f87a6';
                    nextBut.removeAttribute('disabled');
                    callArrLimit = arr.slice(0, (parseInt(select.value)));
                }

                load.style.display = 'none';
                container.style.opacity = '1';
                tableDataBlock.innerHTML = thisObj.drawTable(callArrLimit);
            }, 1000);
        }

    });


    //Sorting
    windThis.sortFunc = function (thisTh) {

        //Keep variable ZtoA with value "false"
        let str = '';  //Keep strings for replacing values
        let arr1 = []; //Array for saving the sorting value and then sorting only that
        let arr2 = []; //Array fot saving the tr values without sort changing
        const tbodyTrArr = document.querySelectorAll('tbody tr');


        //push to arr1 and arr2 before-mentioned values
        for (let i = 0; i < tbodyTrArr.length; i++) {
            arr1.push(tbodyTrArr[i].children[thisTh].innerText);
            arr2.push(tbodyTrArr[i]);
        }

        // if the tr value type is number, then do this sorting
        if (!isNaN(parseInt(tbodyTrArr[0].children[thisTh].innerText))) {
            if (ZtoA === false) {
                arr1.sort(function (a, b) {
                    return b - a;
                });
                //As long as the array isn't sorted, the variable ZtoA is "false",
                //then it's sorted the variable get "true" value
                ZtoA = true;
                //After sorting if we can sort the table to AtoZ, use this sorting
            } else if (ZtoA === true) {
                arr1.sort(function (a, b) {
                    return a - b;
                });
                //As long as the array isn't sorted to AtoZ, the variable ZtoA is "true",
                //then it's sorted the variable get "false" value
                ZtoA = false;
            }
            //else if the value isn't a number do this sorting
        } else {
            if (ZtoA === false) {
                arr1.sort().reverse();
                ZtoA = true;
            } else if (ZtoA === true) {
                arr1.sort();
                ZtoA = false;
            }

        }

        //Now let sort the whole table

        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < tbodyTrArr.length; j++) {
                //if sort value there is in the arr2 , the full tr is
                //replace to this position
                if (arr2[j].children[thisTh].innerText === arr1[i]) {
                    for (let k = 0; k < tbodyTrArr[i].children.length; k++) {
                        str = tbodyTrArr[i].children[k].innerText;
                        tbodyTrArr[i].children[k].innerText = tbodyTrArr[j].children[k].innerText;
                        tbodyTrArr[j].children[k].innerText = str;
                    }
                }
            }
        }

        return tbodyTrArr;
    }


//Pagination Part

    prevBut.addEventListener('click', function () {

        let pageNum = parseInt(pageNumBut.value);

        startNum = (pageNum - 2) * select.value;
        pageNum--;

        pageNumBut.innerHTML = `${pageNum}`;
        pageNumBut.value = `${pageNum}`

        if (searchInput.value === '') {
            thisObj.getRequestFunc(startNum, select.value);
            thisObj.checkPageNumButValue(Math.ceil(allData[0].length / select.value));
        } else if (searchInput.value !== '') {
            load.style.display = 'block';
            container.style.opacity = '0.5';
            setTimeout(function () {
                load.style.display = 'none';
                container.style.opacity = '1';

                tableDataBlock.innerHTML = thisObj.drawTable(arr.slice(startNum, (startNum + parseInt(select.value))));
                thisObj.checkPageNumButValue(Math.ceil(arr.length / select.value));
            }, 1000);
        }
    });

    nextBut.addEventListener('click', function () {

        let pageNum = parseInt(pageNumBut.value);

        startNum = pageNum * select.value;
        pageNum++;

        pageNumBut.innerHTML = `${pageNum}`;
        pageNumBut.value = `${pageNum}`

        if (searchInput.value === '') {
            thisObj.getRequestFunc(startNum, select.value);
            thisObj.checkPageNumButValue(Math.ceil(allData[0].length / select.value));
        } else {
            load.style.display = 'block';
            container.style.opacity = '0.5';
            setTimeout(function () {
                load.style.display = 'none';
                container.style.opacity = '1';

                tableDataBlock.innerHTML = tableDataBlock.innerHTML = thisObj.drawTable(arr.slice(startNum, (startNum + parseInt(select.value))));
                thisObj.checkPageNumButValue(Math.ceil(arr.length / select.value));
            }, 1000);
        }
    });


    this.checkPageNumButValue = function (dataLength = 10) {

        if (pageNumBut.value === '1' || pageNumBut.value === 1) {

            prevBut.style.backgroundColor = 'gray';
            prevBut.setAttribute('disabled', 'disabled');

            nextBut.style.backgroundColor = '#3f87a6';
            nextBut.removeAttribute('disabled');

        } else if (pageNumBut.value === `${dataLength}`) {

            nextBut.style.backgroundColor = 'gray';
            nextBut.setAttribute('disabled', 'disabled');

            prevBut.style.backgroundColor = '#3f87a6';
            prevBut.removeAttribute('disabled');

            console.log(123)

        } else {

            prevBut.style.backgroundColor = '#3f87a6';
            prevBut.removeAttribute('disabled');

            nextBut.style.backgroundColor = '#3f87a6';
            nextBut.removeAttribute('disabled');

        }
    }


//Search

    this.search = function () {
        searchBut.addEventListener('click', function searchClick() {

            pageNumBut.innerHTML = '1';
            pageNumBut.value = '1';
            thisObj.checkPageNumButValue(Math.ceil(arr.length / select.value));

            arr = [];

            let obj = {};
            let objectKeys = Object.keys(allData[0][0]);
            let inputValue = searchInput.value.toUpperCase();

            for (let i = 0; i < allData[0].length; i++) {

                if (searchInput.value === '') {
                    return thisObj.getRequestFunc(0, select.value);
                }

                let objectValues = Object.values(allData[0][i]);
                for (let j = 0; j < objectValues.length; j++) {
                    if (objectValues[j].toString().toUpperCase().includes(inputValue) && searchInput.value !== '') {
                        arr.push(allData[0][i]);
                        matched = true;
                        break;
                    }
                }
            }

            if (matched === false) {
                for (let k = 0; k < objectKeys.length; k++) {
                    obj[objectKeys[k]] = '';
                }
                arr = [obj];
                prevBut.style.backgroundColor = 'gray';
                prevBut.setAttribute('disabled', 'disabled');

                nextBut.style.backgroundColor = 'gray';
                nextBut.setAttribute('disabled', 'disabled');
                matched = false;
            } else if (matched === true) {
                nextBut.style.backgroundColor = '#3f87a6';
                nextBut.removeAttribute('disabled');
            }

            matched = false;

            load.style.display = 'block';
            container.style.opacity = '0.5';

            setTimeout(function () {

                let callArrLimit;

                if (arr.length < select.value) {
                    nextBut.style.backgroundColor = 'gray';
                    nextBut.setAttribute('disabled', 'disabled');
                    callArrLimit = arr.slice(0, (arr.length));
                } else {
                    nextBut.style.backgroundColor = '#3f87a6';
                    nextBut.removeAttribute('disabled');
                    callArrLimit = arr.slice(0, (parseInt(select.value)));
                }

                load.style.display = 'none';
                container.style.opacity = '1';
                tableDataBlock.innerHTML = thisObj.drawTable(callArrLimit);

                return arr;
            }, 1000)
        })
    }


    let searchBlock = document.querySelector('.table__search');

    if (this.searchable === true) {

        this.getRequest("https://jsonplaceholder.typicode.com/posts")
            .then(function (data) {
                allData.push(data);
                return allData;
            })
            .then(function () {

                load.style.display = 'none';
                container.style.opacity = '1';

            })
            .catch(err => console.log(err));

        thisObj.search();
        searchBlock.style.display = 'block';

    } else if (this.searchable === false) {
        searchBlock.style.display = 'none';
    }

    this.init = function () {
        this.getRequestFunc();
        this.checkPageNumButValue();
        // return {};
    };

    this.init();

}


const dataTable = new DataTable(true, true);

console.log(dataTable);








