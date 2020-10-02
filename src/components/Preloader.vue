<template lang="pug">
  svg.preloader(
    width="132"
    height="24"
    viewBox="-2 -2 136 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  )
    path.x1(d="M93.9902 20.3921L96.8583 24.0001H104.852L98.1208 15.7637L93.9902 20.3921Z" fill="#747a89")
    path.x2(d="M92.5767 10.2732L89.2393 6.06226H81.2749L88.5722 14.8823L92.5767 10.2732Z" fill="#747a89")
    path.x3(d="M80.6504 24H88.4131L109.3 0H101.503L80.6504 24Z" fill="#ED0606")
    path.p(d="M127.548 0.00585938H122.638V7.71855H125.848V5.85754H127.55C130.015 5.85754 131.429 4.77919 131.429 2.89691C131.429 1.08614 129.978 0.00585938 127.548 0.00585938ZM125.848 2.33841H127.186C127.651 2.33841 128.208 2.44084 128.208 2.92783C128.208 3.0863 128.208 3.5675 127.186 3.5675H125.848V2.33841Z" fill="#ED0606")
    path.u(d="M117.577 4.27281C117.577 5.24487 117.179 5.67775 116.285 5.67775C115.04 5.67775 114.872 4.96852 114.872 4.27281V0H111.542V4.09502C111.542 6.73291 113.157 8.12819 116.214 8.12819C119.285 8.12819 120.908 6.73291 120.908 4.09502V0H117.579V4.27281H117.577Z" fill="#ED0606")
    path.n1(d="M26.6816 14.0977L20.6662 6.06226H13.1323V23.9999H19.4639V13.7788L21.0094 15.9645L27.0831 23.9999H34.6751V23.6675L28.3145 16.4322L26.6816 14.0977Z" fill="#747a89")
    path.n2(d="M28.3223 13.1643L34.6751 20.4112V6.06226H28.3436L28.3223 13.1643Z" fill="#747a89")
    path.d(d="M47.7125 6.06226H37.7139V10.3273H40.9116L37.7139 13.516V23.9999H47.7125C54.9031 23.9999 59.3439 20.6335 59.3439 14.9325C59.342 9.0596 54.7305 6.06226 47.7125 6.06226ZM47.1967 19.2092H44.6466V10.8549H47.1967C50.7784 10.8549 52.2968 12.2057 52.2968 15.0813C52.2949 17.8816 50.7765 19.2092 47.1967 19.2092Z" fill="#747a89")
    path.e(d="M68.1148 19.2092V16.9482H76.6222V13.0406H68.1148V10.8549H78.7999V6.06226H61.1821V10.3293H64.5253L61.1821 13.6609V23.9999H79.4864V19.2092H68.1148Z" fill="#747a89")
    path.i(d="M0 10.3293H1.51065V13.6088V15.0311V19.7349H0V23.9999H1.51065H8.44336H9.95401V19.7349H8.44336V10.3293H9.95401V6.06226H0V10.3293Z" fill="#747a89")
</template>

<style scoped lang="scss">
  .preloader {
    opacity: 1;
    animation: indexup 2s linear infinite;
    .i{
      opacity: 0;
      transform: rotateX(-90deg) perspective(800px);
      transform-origin: -2px 0;
      animation: i 2s linear infinite;
    }
    .n1{
      opacity: 0;
      transform: rotateX(-90deg) perspective(800px);
      transform-origin: 14px 0;
      animation: n1 2s linear infinite;
    }
    .n2{
      opacity: 0;
      transform: translateX(-5px) rotateX(-90deg);
      transform-origin: 16px 0;
      animation: n2 2s linear infinite;
    }
    .d{
      opacity: 0;
      transform: rotateX(-90deg) perspective(800px);
      transform-origin: 36px 0;
      animation: d 2s linear infinite;
    }
    .e{
      opacity: 0;
      transform: rotateX(-90deg) perspective(800px);
      transform-origin: 56px 0;
      animation: e 2s linear infinite;
    }
    .x1{
      opacity: 0;
      transform: rotateX(-90deg) perspective(800px);
      transform-origin: 82px 0;
      animation: x1 2s linear infinite;
    }
    .x2{
      opacity: 0;
      transform: rotateX(-90deg) perspective(800px);
      transform-origin: 80px 0;
      animation: x2 2s linear infinite;
    }
    .x3{
      opacity: 0;
      transform: scale(0);
      transform-origin: 85px 24px;
      animation: x3 2s linear infinite;
    }
    .u{
      opacity: 0;
      transform: translateX(-5px);
      transform-origin: 102px 0;
      animation: u 2s linear infinite;
    }
    .p{
      opacity: 0;
      transform: translateX(-5px);
      transform-origin: 116px 0;
      animation: p 2s linear infinite;
    }
    @keyframes i {
      0% {
        opacity: 0;
        transform: rotateY(-90deg) perspective(800px);
      }
      10%, 100% {
        opacity: 1;
        transform: rotateY(0) perspective(800px);
      }
    }
    @keyframes n1 {
      0%, 10% {
        opacity: 0;
        transform: rotateY(-90deg) perspective(800px);
      }
      20%, 100% {
        opacity: 1;
        transform: rotateY(0) perspective(800px);
      }
    }
    @keyframes n2 {
      0%, 20% {
        opacity: 0;
        transform: rotateY(-90deg) perspective(800px);
      }
      30%, 100% {
        opacity: 1;
        transform: rotateY(0) perspective(800px);
      }
    }
    @keyframes d {
      0%, 30% {
        opacity: 0;
        transform: rotateY(-90deg) perspective(800px);
      }
      40%, 100% {
        opacity: 1;
        transform: rotateY(0) perspective(800px);
      }
    }
    @keyframes e {
      0%, 40% {
        opacity: 0;
        transform: rotateY(-90deg) perspective(800px);
      }
      50%, 100% {
        opacity: 1;
        transform: rotateY(0) perspective(800px);
      }
    }
    @keyframes x1 {
      0%, 50% {
        opacity: 0;
        transform: rotateY(-90deg) perspective(800px);
      }
      60%, 100% {
        opacity: 1;
        transform: rotateY(0) perspective(800px);
      }
    }
    @keyframes x2 {
      0%, 50% {
        opacity: 0;
        transform: rotateY(-90deg) perspective(800px);
      }
      60%, 100% {
        opacity: 1;
        transform: rotateY(0) perspective(800px);
      }
    }
    @keyframes x3 {
      0%, 60% {
        opacity: 0;
        transform: scale(0);
      }
      70%, 100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes u {
      0%, 70% {
        opacity: 0;
        transform: translateX(-5px);
      }
      80%, 100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes p {
      0%, 70% {
        opacity: 0;
        transform: translateX(-5px);
      }
      80%, 100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes indexup {
      0%, 90% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
</style>
