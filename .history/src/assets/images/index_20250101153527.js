/*

  Cách 1:
  const images = {
    logo: '/src/assets/images/logo.png'
  }

  Cách 2:
  const images = {
    logo: new URL('./logo.png', import.meta.url).href
      - import.meta.url: Đây là url module hiện tại, cung cấp thông tin về vị trí của file hiện tại
      - .href: Đây là đường dẫn URL hoàn chỉnh từ đối tượng URL
  }

*/

const images = {
  logo: new URL('./logo.svg', import.meta.url).href,
};

export default images;
