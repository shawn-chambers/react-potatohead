
// import { useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { Controller, Scene } from 'react-scrollmagic';

const pathVariants = {
  hidden: {
    pathLength: 0
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 4
    }
  }
}

const App = () => {
  const { scrollYProgress } = useViewportScroll();


  const lengthen = useTransform(scrollYProgress, [.1, .75], [0, 1]);
  const expand = useTransform(scrollYProgress, [.2, .75], ['0%', '100%']);


  return (
    <>
      <Controller>
        <Scene
          triggerElement={"#sticky"}
          triggerHook={'onLeave'}
          duration={2000}
          pin={true}
        >
          <section id='sticky'>
            <motion.svg width="300" height="500" viewBox="0 0 481 777" fill="none" xmlns="http://www.w3.org/2000/svg"
              initial="hidden"
              animate="visible"
            >
              <motion.path
                style={{pathLength: lengthen}}
              d="M445.916 406.382C442.497 409.802 439.745 412.925 437.579 417.258C437.579 422.905 437.724 429.311 437.196 434.86C437.031 436.597 436.399 438.32 436.209 440.096C435.96 442.422 435.748 444.847 435.222 447.125C434.156 451.746 434.059 456.45 433.41 461.122C432.582 467.083 431.778 472.538 431.778 478.542C431.778 481.782 433.304 484.719 433.571 487.927C433.665 489.059 432.984 492.459 433.772 493.405C433.959 493.629 434.722 497.319 435.404 496.466C436.19 495.484 437.224 494.465 438.143 493.546C442.999 488.69 447.521 483.434 452.2 478.381C453.942 476.5 455.61 474.515 457.235 472.521C458.755 470.654 460.677 468.997 461.867 466.882C464.095 462.921 466.738 459.088 469.321 455.342L469.419 455.201C470.961 452.965 471.957 450.296 473.467 447.991C475.086 445.519 477.074 442.366 477.737 439.451C478.251 437.191 478.995 435.141 479.348 432.846C479.99 428.671 479.992 424.024 479.992 419.795C479.992 412.397 480.796 402.494 474.192 397.4C471.563 395.372 468.124 393.714 464.767 395.225C461.81 396.556 459.135 399.209 456.067 400.139C454.225 400.697 452.335 402.398 450.71 403.482C449.209 404.483 447.171 405.128 445.916 406.382Z" fill="#E7B78B" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M12.8875 399.568C18.6852 393.771 25.6003 401.577 28.638 406.559C29.8217 408.5 30.509 411.865 32.2659 414.124C34.5003 416.997 35.4908 421.415 37.2211 424.875C40.4111 431.255 42.8233 438.563 43.8133 445.492C44.701 451.706 43.769 458.384 43.769 465.004C43.769 470.776 42.1763 476.245 42.1763 482.214C42.1763 484.996 42.4671 493.203 39.7872 494.779C35.6908 497.189 30.1226 498.457 25.8064 499.69C23.2426 500.422 21.0711 492.959 20.7185 491.372C18.8658 483.035 19.3965 474.274 17.533 465.888C15.5103 456.786 9.52503 447.488 9.52503 438.237C9.52503 433.74 6.33954 430.098 6.33954 425.672C6.33954 422.902 6.15008 420.527 5.54317 417.796C5.08144 415.719 4.64519 409.029 6.73773 407.355C8.51366 405.934 7.35092 403.201 9.12685 401.78C10.2892 400.851 11.8611 400.595 12.8875 399.568Z" fill="#E7B78B" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M107 185.5C125 175.444 130.504 180.117 154 172.444C162.376 172.444 168.793 168.444 177 168.444H210.444C234.164 168.444 253.198 170.557 274.889 178.444C295.295 185.865 319.5 190.5 332.5 197C345.5 203.5 343.5 202 356.5 205C369.5 208 380 210.25 388.5 214.5C397 218.75 396.737 216.788 400.556 224C403.8 230.128 407.1 240.126 411.444 245.556C415.832 251.04 419.339 264.027 420.889 271C421.998 275.99 425.917 286.734 430 290C433.872 293.098 433 312.735 433 318V346C433 364.721 439 362.5 435 403C431 443.5 435 470.5 431 516V543.5C431 554.781 429.5 562.5 427 568.5C422 580.5 422.44 586.886 419.5 593.5C418.177 596.476 416.5 602.5 414 613C411.5 623.5 412.588 624 408 637C403.412 650 404.071 647.5 400.5 660C398.643 666.5 398 666 392.5 672C390.811 673.843 388.889 673 381.444 682C374 691 371.45 694.5 365.5 701.5C359.55 708.5 352.982 715.217 348.111 718C342.103 721.433 330.815 732.606 326.5 738C316.714 750.232 304.453 760.643 291.5 767.5C277.468 774.929 259.388 774 243 774C223.368 774 204.605 775.173 186.111 769.889C179.321 767.949 167.937 769.826 162.556 764.444C157.354 759.243 151.466 757.355 146.556 752.444C141.903 747.791 135.64 741.159 130.111 738C123.128 734.01 120.143 724.915 114 720C101.423 709.938 94.7963 696.907 83.4444 685.556C72.0351 674.146 63.5 671.5 56.8889 653C54.7304 643.287 51.5882 635 49 624C47 615.5 43.4715 608.015 43 600C42.5336 592.072 39.5 579.5 37.5 570C35 563.5 35 562 31 547.5C29 538.5 29 526.037 29 522V493C29 483.25 31 475.308 31 466C31 456.855 33 448.105 33 439.5C33 401.763 39 368 39 330C39 320.875 38.8905 303.331 45 296C46.7595 293.889 48.8446 283.449 49.5 280.5C50.7284 274.972 51.4916 273.779 52.8889 268.889C57.2928 253.475 59.44 235.075 69.5 222.5C72.967 218.166 78.8889 208 86 200.5C93.1111 193 89 195.556 107 185.5Z" fill="#FFE4CB" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M208.195 456.731C208.983 443.344 210.772 435.679 211.5 427.5C212.228 419.321 212.396 416.263 212.5 414.5C212.677 411.485 212.5 407.021 212.5 404C212.5 398.257 212.187 398.741 210.728 393.633C210.008 391.114 194.029 368.767 195.894 368.235C203.957 365.931 215.407 368.162 223.753 368.162H242.06C249.822 368.162 255.801 366.368 263.551 368.09C266.206 368.68 271.232 368.666 273.826 368.09C275.785 367.655 278.742 363.419 281.134 364.544C283.57 365.691 271.593 387.555 270.642 390.883C267.844 400.675 262.899 409.846 262.899 420.913C262.899 432.142 261.91 444.139 264.274 454.777C265.402 459.853 266.278 466.287 268.399 471.058C270.789 476.437 270.975 482.064 273.319 487.339C277.063 495.763 287.126 505.969 287.647 515.343C287.929 520.43 285 521.5 280.5 524.5C276 527.5 273.581 529.218 268.5 529.5C265.484 529.668 268.999 530.393 263.5 530.5C259.366 530.5 253.5 533 250.5 535C247.5 537 241.276 538.524 235.475 537.557C229.429 536.55 225.369 533.029 219.628 531.262C216.634 530.341 212.614 528.368 209.498 528.368C206.987 528.368 205.298 527.157 203 526.5C197.991 525.069 193.472 525.921 188.5 524.5C184.309 523.303 183.5 512.935 183.5 508.5C183.5 504.065 191.853 495.217 194 493.5C198.911 489.571 197.477 486.279 200.5 482.5C203.305 478.994 202.615 475.892 204.939 471.71C206.58 468.755 208.009 459.902 208.195 456.731Z" fill="url(#paint0_linear)" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M206.489 642.348C201.506 642.348 199.404 640.922 195.383 638.408C192.5 636.5 188.978 636.439 185.753 636.439C184.007 636.439 179.751 635.621 178.887 637.177C177.758 639.209 179.745 641.161 180.091 643.059C180.393 644.725 180.018 646.567 180.118 648.257C180.202 649.69 182.315 651.159 182.963 652.196C185.201 655.777 191.773 657.385 195.41 658.597C200.122 660.168 205.472 662.68 210.538 663.029C214.298 663.288 218.512 664.989 221.918 666.449C225.614 668.033 229.37 667.46 233.299 666.968C242.112 665.867 251.064 661.497 258.904 657.503C261.577 656.142 265.137 655.254 267.522 653.4C270.28 651.254 271.24 648.563 272.665 645.357C273.739 642.94 274.587 640.616 275.756 638.408C277.042 635.98 273.976 636.439 272.446 636.439C269.64 636.439 264.83 636.294 263.227 638.299C261.225 640.801 256.69 641.551 253.789 642.84C250.857 644.143 247.506 645.125 244.132 645.302L243.722 645.324C235.305 645.767 225.596 646.279 217.541 644.208C214 643.297 210.113 642.348 206.489 642.348Z" fill="#E7B78B" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M312.201 597.993C313.919 599.712 319.246 601.98 319.103 601.978C318.659 601.975 318.461 602.21 318.027 602.108C317.554 601.997 317.107 601.799 316.643 601.657C316.179 601.514 315.737 601.33 315.303 601.112C315.124 601.022 314.941 600.917 314.806 600.765C314.756 600.71 314.725 600.637 314.673 600.585C314.625 600.537 314.551 600.507 314.491 600.477C314.336 600.399 314.177 600.328 314.024 600.247L313.936 600.2C313.624 600.034 313.311 599.867 312.986 599.728C312.857 599.673 312.725 599.632 312.597 599.577C312.456 599.517 312.321 599.449 312.185 599.381L312.153 599.365C312.028 599.302 311.939 599.254 311.835 599.16C311.705 599.042 311.56 598.944 311.431 598.825L311.425 598.82C311.292 598.697 311.167 598.582 311.007 598.495C310.887 598.43 310.763 598.386 310.637 598.33C310.596 598.312 310.548 598.266 310.519 598.23C310.453 598.148 310.316 598.122 310.229 598.079C303.727 600.246 301.136 607.102 293.628 607.102C282.751 607.102 271.891 607.777 261.463 605.323C256.744 604.213 251.417 605.821 246.733 605.821C244.872 605.821 243.291 606.212 241.609 606.96C240.487 607.458 237.546 608.964 236.485 609.023C231.836 609.282 226.577 609.691 222.395 607.6C218.79 605.798 216.417 605.181 212.148 605.181H185.249C175.933 605.181 166.984 607.102 157.852 607.102C155.596 607.102 153.564 606.587 151.305 606.462C149.326 606.352 147.453 604.54 145.541 604.54C144.022 604.54 142.5 605 142 605C141.5 605 139.025 604.453 141.983 603.757C143.237 603.462 152.25 598.033 151.305 598.847C150.305 601.347 149.316 602.578 149 603C149.529 603.935 148.824 605.181 149.384 605.181C153.69 605.181 158.035 604.54 162.193 604.54C165.766 604.54 170.2 604.808 173.365 603.402C176.478 602.018 180.964 601.978 184.467 601.978H208.946C211.648 601.978 217.196 602.687 219.336 604.398C221.943 606.484 226.134 605.821 229.44 605.821C233.093 605.821 235.672 603.9 239.047 603.9C242.362 603.9 245.783 602.619 249.294 602.619C253.631 602.619 257.954 603.029 262.103 603.259C265.595 603.453 268.581 604.54 272.351 604.54H283.879C287.296 604.54 290.828 602.813 294.126 602.619C297.382 602.427 299.335 599.6 302.452 599.417C303.777 599.339 304.972 597.66 306.294 597.495C307.585 597.334 307.688 593.637 308.714 594.435C309.976 595.417 311.084 596.876 312.201 597.993Z" fill="#E7B78B" stroke="#E7B78B" stroke-width="5" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M84.0446 402.661C89.0801 400.848 93.424 395.248 97.962 391.99C102.5 388.731 106.24 386.476 109.903 384.644C118.033 380.579 123 377.704 133.501 377.062C144.002 376.421 142.5 376 148.054 376.317C153.607 376.634 150.5 376.589 154.239 377.703C157.978 378.818 158 379.082 159.851 380.078C161.701 381.075 169.172 385.03 172.022 390.731" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M151 380C155.012 388.19 153 396 151 399.5C149 403 147 405 143.801 405.759C140.602 406.518 140.444 406.746 138.99 407.162C135.429 408.179 127 406.162 124.27 404.122" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M114.359 386.258C113 390 115.129 397.064 119 399" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M135.732 389.24C135.732 392.202 135.709 392.467 133.854 394.321C133.358 394.818 130.558 396.454 131.755 394.956C132.418 394.128 132.939 392.926 133.219 391.946C133.463 391.093 132.75 390.892 132.75 390.234C132.75 389.304 134.005 389.763 134.241 390.234" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M203.301 388.749C205.177 393.023 207.224 397.483 209.045 401.645C209.531 402.757 210.544 409.01 208.769 406.643" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M276.864 386.264C275.5 392.783 272.812 399.449 269.906 405.428C266.883 411.645 265.297 416.619 264.438 423.487C263.586 430.301 262.947 436.759 262.947 443.673C262.947 445.702 262.624 448.156 263.058 450.162C263.595 452.648 264.438 454.648 264.438 457.231C264.438 460.084 264.822 462.362 264.935 465.184C265.012 467.098 266.426 469.444 266.426 471.508C266.426 475.308 269.409 478.599 269.409 482.194" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M278.302 498.911C280.784 500.85 281.73 503.609 283.88 505.759C284.7 506.579 285.325 507.646 286.145 508.466C287.1 509.42 286.511 510.374 286.78 511.586C287.37 514.241 287.384 516.004 286.255 518.545C285.625 519.963 282.922 522.273 281.285 522.273" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M270.912 526.77C269.795 526.116 265.655 524.115 264.063 525.389C263.858 525.553 260.559 528.037 261.081 526.77C262.266 523.892 267.413 524.929 269.917 524.781C270.502 524.747 272.906 522.523 272.292 521.91C271.587 521.205 273.218 524.187 272.513 524.892C271.008 526.397 270.415 525.712 270.415 523.787C270.415 521.557 268.418 523.787 267.432 523.787" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M204.81 525.781C201.229 525.099 200.027 524.408 197.603 522.523C196.696 521.818 195.742 521.593 194.648 521.28C194.345 521.194 192.362 520.793 193.626 521.805C196.527 524.125 200.466 525.284 204.313 525.284" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M292.729 399.678C295.038 399.678 300.054 398.978 301.179 396.447C301.547 395.619 303.957 393.278 304.934 392.72C308.766 390.53 313.001 389.134 316.836 387.003C319.312 385.628 323.847 382.779 326.777 382.779C329.125 382.779 331.182 382.281 333.487 382.281C335.959 382.281 335.669 381.809 341 382.779C346.331 383.748 347.251 383.254 353.5 386C359.749 388.746 358.858 388.195 361.929 389.848C365 391.5 365.461 391.894 368.5 395.5C371.539 399.106 370.46 397.404 372.73 399.702C375 402 375.571 403.63 376.707 404.298C379.302 405.824 379.883 408.757 382.671 410.152" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M356.86 389.731C357.474 391.213 359.753 394.086 359.842 395.696C359.913 396.975 359.842 398.281 359.842 399.562C359.842 402.115 357.425 403.644 356.252 405.637C354.838 408.042 352.924 409.799 350.895 411.602C350.101 412.308 346.015 413.68 345.428 413.093" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M317.968 389C316.763 391.058 315.979 398.566 316.974 400.783C317.968 403 317.5 402.5 318.5 404C319.5 405.5 324.434 409.86 322.5 408" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M340.984 403.661C345.988 403.661 348.44 400.944 348.44 396.205C348.44 394.607 340.986 395.568 345.457 393.333C346.426 392.849 348.359 393.222 349.434 393.222C350.715 393.222 351.249 394.575 350.041 393.609C349.717 393.35 348.937 392.865 348.937 393.72C348.937 394.394 349.908 394.455 350.317 394.824C351.431 395.826 350.966 397.199 349.434 397.199" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M296.82 369.026C301.533 367.119 305.814 364.797 310.366 362.774C311.6 362.226 319.531 359.281 315.576 363.469C314.741 364.353 309.324 368.732 309.324 365.862C309.324 363.661 308.637 359.773 310.173 358.066C310.824 357.343 312.923 356.765 313.839 356.561C316.29 356.017 313.494 359.838 313.144 360.343C311.025 363.405 309.265 366.908 314.186 364.318C319.022 361.773 326.824 360.64 332.286 359.957C334.599 359.668 336.389 357.912 338.846 357.912C340.763 357.912 342.644 357.657 344.288 356.561C346.664 354.977 338.576 356.523 335.72 356.523C333.302 356.523 330.884 356.523 328.465 356.523C326.268 356.523 324.65 356.744 322.522 357.217C320.309 357.709 318.976 359.301 316.618 359.301C314.213 359.301 314.77 359.406 316.965 359.301C319.609 359.175 322.137 358.606 324.915 358.606C331.283 358.606 338.889 359.994 344.751 357.063C346.365 356.256 347.978 355.379 349.266 354.091C349.654 353.703 352.521 352.355 351.543 352.355C348.51 352.355 345.718 352.238 342.821 353.204C342.186 353.416 337.34 355.056 339.888 355.133C345.55 355.305 351.243 355.133 356.907 355.133C359.691 355.133 363.14 351.413 365.976 352.702C370.234 354.638 375.25 354.99 379.637 356.677C382.133 357.637 384.292 360.177 386.776 360.729C388.897 361.2 388.397 361.223 387.124 359.455C385.711 357.493 384.16 357.962 382.261 357.063C379.262 355.642 376.792 351.718 373.578 351.004C370.844 350.396 367.43 350.163 364.895 349.036C360.169 346.935 352.943 351.731 348.262 352.316C343.546 352.906 339.831 355.173 335.257 356.523C334.422 356.769 328.53 358.746 329.469 357.912C331.233 356.344 337.049 356.974 339.348 356.677C345.1 355.935 351.172 354.439 356.907 354.439C359.757 354.439 362.365 351.66 365.59 351.66C367.119 351.66 368.098 351.93 369.449 352.316C372.597 353.215 367.761 351.682 366.94 351.313C362.398 349.269 359.245 350.64 355.054 352.316C344.003 356.737 331.499 354.096 320.4 357.565C318.554 358.141 318.081 358.571 316.811 359.841C315.439 361.213 319.682 360.69 320.438 360.69C325.703 360.69 322.031 359.996 319.049 359.996" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M164.144 357.912C154.885 355.246 144.965 352.992 136.359 348.573C133.595 347.154 131.63 344.601 129.412 342.63C125.377 339.043 119.33 339.343 114.284 339.157C112.728 339.099 108.852 337.405 107.338 338.616C106.358 339.4 103.661 339.777 102.321 339.851C100.214 339.968 99.9841 342.303 98.1534 343.17C93.3451 345.448 89.7502 349.571 85.0324 351.93C82.6414 353.126 78.854 352.429 82.8713 351.313C86.2068 350.386 87.5564 348.31 90.2422 346.45C96.2434 342.296 104.85 337.884 112.201 337.767C129.69 337.49 147.078 341.898 161.018 352.741C164.988 355.828 157.966 353.232 156.503 352.663C151.14 350.578 146.824 346.602 141.607 344.366C140.945 344.083 135.663 342.551 136.127 343.016C138.894 345.782 143.327 347.503 146.778 349.229C154.407 353.043 162.185 353.531 170.087 355.789C172.13 356.373 174.221 357.914 170.357 356.175C166.345 354.37 162.599 352.114 158.587 350.271C151.649 347.083 144.364 346.294 137.208 344.173C135.496 343.666 133.275 344.019 131.496 344.019C130.606 344.019 133.17 345.137 133.58 345.254C135.201 345.717 136.619 347.126 138.095 347.454C140.084 347.896 141.779 348.743 143.652 349.576C148.396 351.685 141.015 347.545 139.948 346.798C137.828 345.314 135.413 344.883 133.233 343.672C131.764 342.856 130.438 341.24 128.718 341.24" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M46.4809 279.285C46.3842 284.406 44.3795 288.564 43.5301 293.49C42.8046 297.698 42.0015 301.706 40.9225 305.842C39.5711 311.022 38.0647 316.258 37.217 321.556C35.1803 334.285 34.8938 346.959 34.7466 359.915C34.6914 364.776 33.5114 369.49 33.5114 374.395C33.5114 377.705 33.4788 380.889 32.7566 384.139C32.3695 385.88 31.0914 387.403 31.041 389.217C30.951 392.457 30.8165 395.864 31.3498 399.064C32.3253 404.917 29.8058 410.02 29.8058 415.773" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M29.9988 453.655C29.9988 459.401 29.408 465.501 29.098 470.771C28.8286 475.351 27.2963 479.649 27.2963 484.284V498.697C27.2963 503.09 27 508 27.3464 513.511C27.6927 519.021 29.9988 531.303 29.9988 539.685C29.9988 543.98 30.8025 546.891 31.6513 551.446C32.5 556 34.2089 561.316 35.1045 564.658C36 568 38.1063 574.883 38.1063 577.97C38.1063 583.062 38.9156 589.069 39.7078 593.284C40.5 597.5 41.6214 601.392 42.8107 605.696C44 610 45.4914 615.31 46.1638 619.008C46.932 623.233 48 628.5 48.9163 632.471C49.8327 636.441 52 643.5 54.3213 649.136C56.6427 654.772 59.5 659.5 61.3278 662.849C63.1556 666.198 67.0058 673.877 70.9868 677.062C73.0695 678.728 74.4202 681.847 76.3918 683.818C78.6297 686.056 80.7091 688.533 82.6476 691.025C86.0731 695.429 91.2266 700.337 95.5 704C101.889 709.476 103 713.5 108.5 717.5C114 721.5 116.229 723.007 120 727C123.452 730.655 123.759 731.5 126.5 735C129.241 738.5 135 743.5 137.5 745.5C140 747.5 142 750 145.413 753.04C148.826 756.079 150.627 757.689 153.22 760.146C163.119 769.524 173.438 769.236 186.001 770.806C192.949 771.675 199.969 771.757 207.02 771.757C213.881 771.757 220.693 773.559 227.589 773.559C234.614 773.559 241.24 775.36 248.308 775.36C254.242 775.36 259.737 774.46 265.674 774.46C270.173 774.46 273.787 772.658 278.286 772.658C281.872 772.658 291 768.5 296 765C301 761.5 303.831 758.183 306.5 756C309.018 753.94 321.5 742.5 325 739C328.5 735.5 331.963 733.681 337.688 728.529C343.252 723.522 347.34 718.077 353.335 713.414C366.429 703.23 373.811 693.937 384.764 681.767C390.932 674.914 394 669.5 398.75 658.091C403.499 646.682 404.5 645.5 408.13 636.053C411.76 626.607 411.307 619.481 414.333 612.672C416.317 608.208 415.487 606.087 418.994 597.794C422.5 589.5 425.91 584.111 427.201 577.011C430.521 558.747 432.574 540.642 432.574 521.747C432.574 512.843 434.699 503.885 434.699 495.236V484.609C434.699 481.823 435 480.5 435.825 473.5C436.649 466.5 437.887 461.163 437.887 453.789C437.887 445.841 436.825 438.211 436.825 429.876" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M447.076 453.257C447.076 446.142 450.532 441.469 455.578 436.784C458.393 434.17 463.017 427.379 463.017 423.5" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M451.327 402.244C458.568 393.248 471.994 386.662 477.66 400.119C479.335 404.097 478.959 408.497 478.959 412.872C478.959 417.969 479.115 426.336 477.069 430.939C475.3 434.919 476.369 440.818 473.409 444.519C469.538 449.358 466.404 455.513 463.253 460.933C457.883 470.169 452.673 479.258 448.138 488.329" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M434.322 346.98C434.322 329.976 434.322 312.972 434.322 295.967C434.322 291.157 432.816 286.309 433.26 293.842C433.457 297.199 436.171 301.104 436.448 304.706C436.772 308.924 438.573 307.331 438.573 303.997C438.573 301.95 438.573 299.904 438.573 297.857C438.573 292.955 440.699 288.323 440.699 283.214C440.699 281.686 439.597 272.114 439.872 271.76C440.918 270.415 446.013 263.379 446.013 264.084" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M439.636 254.519C447.709 246.684 452.808 246.467 455.578 235.39" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M432.197 249.206C437.696 243.868 451.327 235.562 451.327 226.887" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M441.762 222.636C441.958 209.318 448.138 197.814 448.138 184.908C448.138 179.277 446.132 176.143 443.887 171.092C441.959 166.752 441.19 161.835 439.4 157.807C438.21 155.13 438.516 145.026 436.448 143.991" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M397.125 210.946C399.103 208.336 402.47 205.54 403.502 202.444" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M372.682 206.695C377.899 203.513 381.405 197.551 386.498 195.004" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M366.305 190.753C375.344 184.107 379.317 176.549 385.435 167.372" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M354.615 180.126C367.812 172.52 377.48 165.732 382.247 151.431" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M339.736 183.314C351.654 175.522 362.088 166.893 372.446 157.571C375.731 154.614 376.909 145.939 377.996 141.866C379.34 136.825 380.766 126.343 384.372 122.736" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M320.606 182.251C342.962 170.626 352.947 150.818 362.054 128.05" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M298.288 179.063C306.529 174.226 315.268 170.517 322.614 164.302C325.31 162.02 329.359 160.62 331.234 157.807" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M287.66 166.31C292.126 159.096 298.14 153.712 303.366 147.18C304.956 145.192 307.83 141.877 309.978 140.803" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M274.907 162.059C278.791 146.979 290.34 136.768 299.646 124.566C304.37 118.372 311.226 111.367 313.167 103.606" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M265.342 152.494C266.908 144.196 269.733 136.221 272.9 128.404C276.974 118.345 280.757 107.028 287.011 98.0563C289.509 94.4716 291.317 91.6813 295.1 89.7903" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M255.777 166.31C255.777 154.647 254.391 142.069 256.013 130.53C257.168 122.322 261.242 115.665 265.342 108.684C273.745 94.3768 284.552 82.2711 296.162 70.6604" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M203.702 154.619C211.747 145.287 218.061 136.349 223.422 125.098C227.053 117.478 229.432 108.268 234.522 101.481" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M196.262 152.494C199.431 144.478 201.066 136.002 204.174 128.05C205.88 123.684 208.853 114.315 213.267 112.108" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M184.572 145.054C189.819 137.709 195.129 127.268 197.325 118.485" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M182.446 131.238C190.297 110.154 200.438 90.9286 216.455 74.9115" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M159.065 163.121C159.065 155.204 158.627 147.694 157.53 139.858C156.97 135.857 155.709 129.329 157.471 125.452C158.966 122.164 164.732 118.628 167.567 116.359" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M182.446 109.983C182.446 83.6894 207.385 57.2177 229.444 45.154C241.012 38.8279 253.624 32.9723 263.276 23.7806C270.016 17.361 276.827 11.0984 283.763 4.88689" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M148.438 149.305C148.438 140.255 148.31 131.195 148.438 122.146C148.503 117.508 150.773 114.249 151.626 109.983" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M137.81 156.745C137.81 148.461 135.684 140.563 135.684 132.301" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M115.492 165.247C115.362 157.436 105.517 83.4136 116.554 83.4136" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M105.927 173.749C102.223 160.678 98.4875 148.026 98.4875 134.427" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M98.4874 172.686C95.3015 167.785 90.1509 164.948 84.6714 163.121" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M75.1066 206.695C72.6395 216.273 69.6823 232.312 62.3533 239.641" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M24.0937 331.039C22.6657 328.24 20.8248 325.483 19.8426 322.537" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M33.6585 318.286C30.2212 314.747 25.3275 310.468 24.0936 305.532" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M34.7214 301.281C31.458 296.386 28.356 291.202 25.1564 286.402" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M41.098 280.026C35.8707 273.876 30.8643 267.667 25.1564 261.959" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M47.4745 260.896C43.3764 255.744 38.2562 250.257 34.7213 244.954" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M46.4118 238.578C45.6091 232.758 44.1725 227.267 43.2235 221.574" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M51.7256 213.071C49.2557 208.132 47.1117 202.902 44.2863 198.193" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M52.7884 190.753C52.6689 184.539 51.0614 179.594 49.6001 173.749" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M59.165 178C60.1143 169.863 57.1852 163.553 57.0395 155.682C56.9979 153.439 58.1076 148.245 55.9767 147.18" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M63.4161 163.121C64.189 163.707 70.3969 170.43 69.7336 166.782C68.9213 162.314 67.0177 158.044 66.6634 153.438C65.8861 143.333 66.6044 132.876 66.6044 122.736" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M77.2321 98.2924C89.6271 81.7657 100.537 64.635 115.492 50.4678C122.909 43.4414 132.381 43.9134 141.412 41.9066C145.336 41.0345 150.887 31.0548 153.515 28.3858C158.712 23.1079 163.946 17.9554 169.162 12.7395C171.652 10.249 175.61 10.1341 178.195 7.95706C180.719 5.8313 183.233 3.98211 185.635 1.58044" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M178.015 25.8316C188.171 22.3161 198.538 16.7156 208.836 14.1411" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M204.585 40.0826C215.817 37.9226 226.858 34.341 235.169 26.0305C240.14 21.0592 246.033 11.1945 246.033 3.94849" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M308.104 21.074C308.104 30.3257 309.167 39.4877 309.167 48.706" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M323.987 21.7731C328.088 16.41 333.073 11.9431 339.279 9.07887C342.035 7.80711 342.856 8.80241 341.523 11.7358C339.203 16.8399 347.44 28.0913 348.49 23.3672C349.402 19.2633 361.198 15.1861 363.546 19.6475C366.287 24.8565 370.368 29.5132 372.874 34.5263" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M405.628 78.0998C404.246 84.6989 402.389 91.1875 400.904 97.761C400.165 101.036 400.524 105.522 398.188 107.857" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M412.004 90.853C412.004 96.5077 412.663 114.436 406.69 117.422" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M415.193 101.481C415.193 109.682 414.13 117.859 414.13 125.924" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M422.632 118.485V145.054" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M309.857 599.3C302.306 600.958 296.216 607.802 288.602 607.802C282.123 607.802 275.224 608.346 269.236 606.503C262.806 604.525 254.974 604.614 248.217 604.614C241.647 604.614 237.647 609.928 231.212 609.928C223.961 609.928 218.242 603.551 211.02 603.551C203.935 603.551 196.849 603.551 189.764 603.551C183.033 603.551 176.66 607.802 169.572 607.802C166.124 607.802 150.805 609.592 149.379 606.739" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M197.204 637.56C208.56 642.386 217.926 643.936 230.681 643.936C235.604 643.936 259.907 643.576 259.907 637.56" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M24.5288 402.37C20.4245 399.967 13.7979 394.375 8.82342 398.355C6.95494 399.85 2.33727 406.594 2.21064 408.746C1.94187 413.316 2.21064 417.984 2.21064 422.562C2.21064 428.661 4.17523 429.64 6.46172 434.784C8.39976 439.145 9.06297 442.941 10.7128 447.478C11.4427 449.486 12.8383 451.311 12.8383 453.383C12.8383 455.509 12.3145 458.391 13.3697 460.291C14.8119 462.887 14.9639 471.139 14.9639 474.107C14.9639 478.128 16.823 483.404 18.1522 487.391" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M460.794 281.667C458.456 284.753 456.447 287.311 454.704 290.604C453.874 292.171 453.499 295.741 451.857 296.562" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M458.411 309.073C457.711 312.339 456.608 315.659 454.373 318.142C452.291 320.456 449.869 322.782 448.878 325.755" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M456.623 334.692C453.929 339.408 451.833 343.754 448.415 347.932C446.678 350.055 446.123 355.867 443.516 356.736" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <motion.path
                style={{pathLength: lengthen}}
              d="M456.028 359.715C454.939 362.342 453.501 365.421 451.129 367.129C449.287 368.455 446.852 370.917 445.899 372.822" stroke="#7900F1" stroke-width="3" stroke-linecap="round" />
              <defs>
                <linearGradient id="paint0_linear" x1="236.574" y1="364.355" x2="236.574" y2="537.817" gradientUnits="userSpaceOnUse">
                  <stop offset="0.401042" stop-color="#FFE4CB" />
                  <stop offset="1" stop-color="#E7B78B" />
                </linearGradient>
              </defs>
            </motion.svg>

            <motion.div
              className="bar"
              style={{
                position: 'relative',
                top: '90%',
                height: '15px',
                backgroundColor: '#7900F1',
                width: expand,
                zIndex: -1
              }}
            />
          </section>
        </Scene>
      </Controller>
    </>
  )
}

export default App