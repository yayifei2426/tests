/*
 * @Description:
 * @Author: ju.rui
 * @Date: 2024-02-16 11:38:03
 */
import('remote/addList').then(({ addList }) => {
  let app = document.querySelector('#app');

  app.innerHTML = `
  <h3>Host</h3>
`;
  const list = addList();
  console.log(list);
});
