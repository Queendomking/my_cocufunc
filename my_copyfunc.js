function deepClone (obj) 
{
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Boolean) return new Boolean(obj.valueOf());
    if (obj instanceof Number) return new Number(obj.valueOf());
    if (obj instanceof String) return new String(obj.valueOf());
    if (obj instanceof RegExp) return new RegExp(obj.valueOf());
    if (obj instanceof Date) return new Date(obj.valueOf());
    var cpObj = obj instanceof Array ? [] : {};
    for (var key in obj) cpObj[key] = myClone(obj[key]);
    return cpObj;
}

var obj = 
{
    month: 4,
    day: 17,
    sayDate: function () 
    {
     console.log('The date today is' + this.month + '/'+ this.day);
    },
};
var newObj = deepClone(obj);

