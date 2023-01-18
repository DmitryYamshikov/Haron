module.exports = {
  times : function (n, block) { // повтор блока заданного кол-ва раз
    let accum = '';
    for(let i = 0; i < n; ++i) {
      accum += block.fn(i);
    }
    return accum;
  },
  ifMoreThen(number, value, options) { // если число больше чем
    if(value >= number) {
      return options.fn(this);
    }
    return options.inverse(this);
  },
  math: function(lvalue, operator, rvalue) { // математические операции
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);

    return {
      '+': lvalue + rvalue,
      '-': lvalue - rvalue,
      '*': lvalue * rvalue,
      '/': lvalue / rvalue,
      '%': lvalue % rvalue
    }[operator];
  },

  slice(array, offset, limit) {
    offset = parseInt(offset);
    if (isNaN(offset)) {
      offset = 0;
    }
    limit = parseInt(limit);
    if (isNaN(limit)) {
      limit = array.length;
    }
    let end = offset + limit;
    if (end > array.length) {
      end = array.length;
    }

    return array.slice(offset, end);
  },

  time: function () {
    return (new Date()).getTime();
  },

  ifEq: function (name, value, options) {
    if (name === value) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },

  ifCond: function(v1, operator, v2, opts) { // функция сравнения двух чисел
    var isTrue = false;
    switch (operator) {
      case '===':
        isTrue = v1 === v2;
        break;
      case '!==':
        isTrue = v1 !== v2;
        break;
      case '==':
        isTrue = v1 === v2;
        break;
      case '<':
        isTrue = v1 < v2;
        break;
      case '<=':
        isTrue = v1 <= v2;
        break;
      case '>':
        isTrue = v1 > v2;
        break;
      case '>=':
        isTrue = v1 >= v2;
        break;
      case '||':
        isTrue = v1 || v2;
        break;
      case '&&':
        isTrue = v1 && v2;
        break;
    }

    return isTrue ? opts.fn(this) : opts.inverse(this);
  },

  if_even: function (conditional, options) {  //проверка на то, является ли элемент четным по порядку - использование {{ if_even @index }}
    if((conditional % 2) === 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  }
}
