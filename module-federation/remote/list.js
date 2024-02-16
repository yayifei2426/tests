/*
 * @Description:
 * @Author: ju.rui
 * @Date: 2024-02-16 11:15:42
 */
let wrap = document.createElement('div');
const list = [
  {
    name: '1',
    age: 23,
  },
  {
    name: '2',
    age: 333,
  },
];
list.forEach((item) => {
  wrap.innerHTML += `
  <div>
    <p>${item.name}-${item.age}</p>
  </div>
  `;
});

export const addList = () => {
  document.querySelector('#list').appendChild(wrap);
};
