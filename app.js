// Câu 1: Arguments và object (50đ)
// Thiết kế hàm customCalc, nhận vào không giới hạn tham số các chữ số, trả về 1 objet chứa các thuộc tính sau:
//  - max: số lớn nhất trong các tham số
//  - min: số nhỏ nhất trong các tham số
//  - avg: số trung bình của các tham số
//  - sum: tổng của các đối số
// Gợi ý: Dùng cú pháp [...arguments] để chuyển object arguments về dạng mảng (object arguments có sẵn trong hàm).
// VD:
// customCalc(4, 7, 32, 6, 3, 6, 22, 44);
// --> { max: 44, min: 3, avg: 15.5, sum: 124 }
const customCalc = (...arg) => {
    const sum = arg.reduce((prev, curr) => prev += curr);
    const avg = sum / arg.length;
    return {
        max: Math.max(...arg),
        min: Math.min(...arg),
        avg: avg,
        sum: sum
    }
}
console.log('Test case cau 1: ',customCalc(4, 7, 32, 6, 3, 6, 22, 44))


// Câu 2: Callback
// 2a (40đ)
// Thiết kế hàm customFilter (có chức năng y như prototype filter của array), nhận vào tham số thứ nhất là mảng cần lọc, tham số thứ 2 là hàm callback dùng để lọc điều kiện.
// Hàm callback sẽ được gọi nhiều lần, tương ứng với số phần tử của mảng. Mỗi lần gọi hàm callback sẽ đưa vào 2 đối số, thứ nhất là giá trị của phần tử đang xét và thứ 2 là chỉ số index của phần tử đó trong mảng, nếu hàm callback trả về true thì phần tử sẽ được nhận, ngược lại sẽ bị loại.
// Hàm customFilter sẽ trả về mảng mới đã được lọc.
// Gợi ý:
//  - Tạo mới 1 mảng.
//  - Chạy vòng lặp dể duyệt qua từng phần tử trên mảng cần lọc.
//  - Mổi lần duyệt, gọi tới hàm callback với 2 đối số là giá trị và chỉ số index của phần tử, nếu hàm callback trả về true, thêm phần tử hiện tại vào mảng đã tạo.
//  - Trả về mảng đã tạo.
// VD:
// customFilter([2,7,33,64,4], function (value) {
//     return value > 5;
// });
// ---> [7,33,64]

const customFilter = (arr, cb) => {
    let res = []
    for(let i = 0; i < arr.length; i++){
        let cbCheck = cb(arr[i],i);
        if(cbCheck){
            res.push(arr[i]);
        }
    }
    return res
}

const res = customFilter([2,7,33,64,4], function (value) {
    return value > 5;
});

console.log('Test case cau 2a: ',res);
// 2b (10đ)
// Dùng hàm vừa thiết kế, lọc ra các phần tử là số chẵn trong mảng sau [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const filterEvenNumber = customFilter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11], (value) => !(value % 2) && value);


console.log('Test case cau 2b: ',filterEvenNumber)
