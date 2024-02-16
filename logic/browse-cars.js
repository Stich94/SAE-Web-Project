"use strict";

const audiXSIcon = `<svg width="47" height="16" viewBox="0 0 47 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.8043 8.69454e-06C36.8929 8.69454e-06 35.1395 0.670528 33.7638 1.78806C32.3399 0.62894 30.5594 -0.00270295 28.7233 8.69454e-06C26.812 8.69454e-06 25.0586 0.670528 23.6829 1.78806C22.259 0.62894 20.4784 -0.00270295 18.6424 8.69454e-06C16.7311 8.69454e-06 14.9777 0.670528 13.602 1.78806C12.4282 0.835517 11.0085 0.23504 9.50744 0.0561946C8.00639 -0.12265 6.48537 0.127457 5.12062 0.777542C3.75587 1.42763 2.60324 2.45108 1.79626 3.72934C0.989275 5.00759 0.560974 6.48833 0.560974 8C0.560974 9.51167 0.989275 10.9924 1.79626 12.2707C2.60324 13.5489 3.75587 14.5724 5.12062 15.2225C6.48537 15.8725 8.00639 16.1227 9.50744 15.9438C11.0085 15.765 12.4282 15.1645 13.602 14.2119C14.9777 15.3295 16.7311 16 18.6424 16C20.5538 16 22.3072 15.3295 23.6829 14.2119C25.0586 15.3295 26.812 16 28.7233 16C30.6347 16 32.3881 15.3295 33.7638 14.2119C34.7581 15.0189 35.9317 15.5753 37.1857 15.8344C38.4398 16.0936 39.7377 16.0479 40.9705 15.7013C42.2032 15.3546 43.3347 14.7171 44.2699 13.8423C45.2051 12.9675 45.9166 11.881 46.3446 10.6741C46.7727 9.46721 46.9047 8.17519 46.7297 6.90665C46.5547 5.63811 46.0777 4.43012 45.3389 3.38421C44.6 2.3383 43.6209 1.48503 42.4838 0.896137C41.3467 0.307242 40.0848 -7.80696e-05 38.8043 8.69454e-06ZM33.7638 11.5954C33.013 10.547 32.61 9.2895 32.6116 8C32.6116 6.65896 33.0393 5.41812 33.7638 4.40463C34.4883 5.41812 34.916 6.65896 34.916 8C34.916 9.34104 34.4883 10.5819 33.7638 11.5954ZM23.6829 11.5954C22.9321 10.547 22.5291 9.2895 22.5307 8C22.5307 6.65896 22.9584 5.41812 23.6829 4.40463C24.4074 5.41812 24.8351 6.65896 24.8351 8C24.8351 9.34104 24.4074 10.5819 23.6829 11.5954ZM13.602 11.5954C12.8512 10.547 12.4482 9.2895 12.4498 8C12.4498 6.65896 12.8775 5.41812 13.602 4.40463C14.3264 5.41812 14.7542 6.65896 14.7542 8C14.7542 9.34104 14.3264 10.5819 13.602 11.5954ZM2.36884 8C2.36929 6.84449 2.69304 5.71214 3.30346 4.73102C3.91389 3.7499 4.78665 2.95914 5.82305 2.44816C6.85944 1.93718 8.01813 1.72636 9.16809 1.83955C10.3181 1.95273 11.4134 2.38541 12.3303 3.08864C11.2348 4.49123 10.6406 6.22029 10.6424 8C10.6424 9.85164 11.2744 11.5568 12.3303 12.9114C11.4134 13.6146 10.3181 14.0473 9.16809 14.1605C8.01813 14.2736 6.85944 14.0628 5.82305 13.5518C4.78665 13.0409 3.91389 12.2501 3.30346 11.269C2.69304 10.2879 2.36929 9.15552 2.36884 8ZM14.8736 12.9114C15.9691 11.5088 16.5634 9.77971 16.5615 8C16.5615 6.14837 15.9295 4.44317 14.8736 3.08864C15.9539 2.25699 17.2791 1.80644 18.6424 1.80733C20.0605 1.80733 21.3669 2.28517 22.4112 3.08864C21.3152 4.49094 20.7209 6.22019 20.7233 8C20.7233 9.85164 21.3553 11.5568 22.4112 12.9114C21.331 13.743 20.0057 14.1936 18.6424 14.1927C17.279 14.1946 15.9534 13.7439 14.8736 12.9114ZM24.9546 12.9114C26.0506 11.5091 26.6449 9.77981 26.6424 8C26.6424 6.14837 26.0104 4.44316 24.9546 3.08671C25.9989 2.28517 27.3052 1.8054 28.7233 1.8054C30.1415 1.8054 31.4478 2.28324 32.4921 3.08671C31.3961 4.48901 30.8018 6.21826 30.8043 7.99807C30.8043 9.84971 31.4362 11.5549 32.4921 12.9094C31.4119 13.7411 30.0866 14.1916 28.7233 14.1907C27.36 14.1941 26.0342 13.744 24.9546 12.9114ZM38.8043 14.1927C37.4408 14.1946 36.1152 13.7439 35.0355 12.9114C36.1307 11.5086 36.7249 9.77966 36.7233 8C36.7233 6.14837 36.0914 4.44317 35.0355 3.08864C35.8162 2.48906 36.7285 2.08423 37.697 1.90771C38.6654 1.73119 39.6619 1.78807 40.6039 2.07364C41.546 2.3592 42.4064 2.86522 43.1138 3.54974C43.8211 4.23426 44.3552 5.07755 44.6716 6.00968C44.9879 6.94182 45.0775 7.93595 44.9329 8.90964C44.7883 9.88333 44.4137 10.8085 43.8401 11.6085C43.2665 12.4085 42.5105 13.0602 41.6347 13.5096C40.7589 13.959 39.7886 14.1932 38.8043 14.1927Z" fill="#262626"/>
</svg>
`

const teslaXSIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3.57467L9.65 1.55733C9.65 1.55733 12.48 1.61733 15.2973 2.92667C14.576 4.01733 13.1433 4.552 13.1433 4.552C13.046 3.59267 12.374 3.35867 10.2407 3.35867L8 16L5.746 3.356C3.626 3.356 2.954 3.592 2.856 4.55067C2.856 4.55067 1.42533 4.02067 0.703333 2.93067C3.52 1.62067 6.35 1.56 6.35 1.56L8 3.57467L7.99733 3.576H8V3.57467ZM8 0.975333C10.2767 0.955333 12.884 1.32733 15.552 2.49533C15.9087 1.85 16 1.56533 16 1.56533C13.0833 0.408 10.352 0.01 8 0C5.648 0.01 2.91667 0.406667 0 1.566C0 1.566 0.13 1.916 0.448 2.49667C3.116 1.326 5.72333 0.956667 8 0.973333V0.975333Z" fill="#262626"/>
</svg>
`

const dodgeXSIcon = `<svg width="109" height="16" viewBox="0 0 109 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_143_166)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M92.5492 0.361206L79.6281 15.4868H85.9589L98.8541 0.373448L92.5492 0.361206ZM101.47 0.361206L88.5492 15.4868H94.88L107.775 0.373448L101.47 0.361206Z" fill="#262626"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.2826 3.9972C25.4478 3.99164 19.0089 4.15564 19.0089 7.13258C19.0089 9.22723 22.0212 9.83058 24.5081 10.1016C26.2686 10.2936 27.7609 10.2844 27.7609 10.2844C27.7609 10.2844 29.1598 10.3408 30.8545 10.2437C33.4837 10.0925 36.8307 9.49349 36.8307 7.1317C36.8307 4.01342 28.0913 4.00231 27.7548 4.00231C27.7129 4.00231 27.5447 3.99798 27.2826 3.9972ZM9.99742 4.08429L1.45991 4.0877C1.46008 4.0877 1.05991 4.05307 0.821554 4.24142C0.598981 4.41709 0.596905 4.81364 0.596905 4.81364L0.533554 9.50136C0.533554 10.2276 1.3486 10.1703 1.3486 10.1703L10.2952 10.1633C10.2952 10.1633 13.2357 10.2372 15.2414 9.55033C16.556 9.10044 17.2318 8.23784 17.2318 7.1422C17.2318 5.91627 16.0638 5.06984 14.4811 4.62564C12.4928 4.06816 9.99742 4.08429 9.99742 4.08429ZM48.0606 4.08429L39.5261 4.0877C39.5261 4.0877 39.1256 4.05307 38.8874 4.24142C38.6647 4.41709 38.6629 4.81364 38.6629 4.81364L38.5985 9.50136C38.5985 10.2276 39.4136 10.1703 39.4136 10.1703L48.3633 10.1633C48.3633 10.1633 51.2995 10.2372 53.306 9.55033C54.6206 9.10044 55.2995 8.23784 55.2995 7.1422C55.2995 5.91627 54.1319 5.06984 52.5449 4.62564C50.56 4.06816 48.0606 4.08429 48.0606 4.08429ZM73.6043 4.09111C73.5265 4.09111 63.7016 4.0988 63.7016 4.0988C63.7016 4.0988 62.9665 4.09461 61.9892 4.18336C60.0303 4.36078 57.0897 4.96491 57.0897 7.13258C57.0897 8.14121 57.6303 8.85561 58.5643 9.30681C60.5968 10.2363 64.1341 10.1668 64.1341 10.1668H72.973C73.747 10.1668 73.8249 9.70423 73.8249 9.39206C73.8249 9.08033 73.8465 7.84391 73.8465 7.13258C73.8465 6.42168 73.0854 6.48202 73.0854 6.48202H65.2195C64.8735 6.48202 64.8735 6.76664 64.8735 6.76664C64.8735 6.76664 64.8562 7.13302 64.8562 7.4583C64.8562 7.78445 65.1849 7.77571 65.1849 7.77571H69.7211C70.0195 7.77571 70.0541 8.01923 70.0541 8.01923V8.57011C70.0541 8.85342 69.7557 8.87222 69.7557 8.87222H64.5492C63.7449 8.87222 60.9254 8.87222 60.9254 7.13258C60.9254 5.39337 64.2551 5.37719 64.2551 5.37719H73.5568C73.933 5.37719 73.8811 4.91944 73.8811 4.91944V4.34644C73.8811 4.09745 73.6822 4.09111 73.6043 4.09111ZM76.6573 4.09539C75.9611 4.09539 75.7362 4.21025 75.7146 4.86042C75.6973 5.37457 75.6411 8.58673 75.6411 9.32998C75.6411 10.0724 76.0476 10.1668 76.5319 10.1668H90.7849C91.1049 10.1668 91.0919 9.91583 91.0919 9.85856V9.14285C91.0919 8.87047 90.6984 8.87222 90.6984 8.87222H79.9178C79.4984 8.87222 79.5114 8.60902 79.5114 8.60902C79.5114 8.60902 79.5157 8.35982 79.5157 8.08132C79.5157 7.80369 79.7665 7.75866 79.8876 7.75866H90.0324C90.3308 7.75866 90.3265 7.47535 90.3265 7.47535V6.76664C90.3265 6.46016 89.9589 6.47196 89.9589 6.47196H79.853C79.5157 6.47196 79.5114 6.12613 79.5114 6.12613L79.52 5.74008C79.52 5.40518 79.853 5.37719 79.853 5.37719H90.5427C90.8584 5.37719 90.9016 5.14679 90.9016 4.91944V4.34644C90.9016 4.07056 90.5254 4.09539 90.5254 4.09539H76.6573ZM27.7838 5.28844C28.6772 5.28844 32.9968 5.36714 32.9968 7.154C33.0015 9.07377 28.9661 8.96272 27.7838 8.96272C26.6011 8.96272 22.8735 8.88927 22.8735 7.154C22.8735 5.23379 26.89 5.28844 27.7838 5.28844ZM10.077 5.37719C10.077 5.37719 11.2774 5.42398 12.195 5.77593C12.9142 6.0518 13.3998 6.54934 13.3998 7.1352C13.3998 7.62837 13.0837 8.12547 12.512 8.39042C11.5343 8.84293 10.0727 8.87047 10.0727 8.87047L4.56434 8.87397C4.56434 8.87397 4.25351 8.88184 4.25351 8.59022C4.25351 8.59022 4.30251 5.70597 4.30251 5.66837C4.30251 5.63034 4.29892 5.38069 4.62748 5.38069C5.00542 5.38069 10.077 5.37719 10.077 5.37719ZM48.1406 5.37719C48.1406 5.37719 49.3427 5.42398 50.2595 5.77593C50.9816 6.0518 51.466 6.54934 51.466 7.1352C51.466 7.62837 51.1503 8.12547 50.5751 8.39042C49.5979 8.84293 48.1362 8.87047 48.1362 8.87047L42.6292 8.87397C42.6292 8.87397 42.3196 8.88184 42.3196 8.59022C42.3196 8.59022 42.3676 5.70597 42.3676 5.66837C42.3676 5.63034 42.3641 5.38069 42.6928 5.38069C43.0703 5.38069 48.1406 5.37719 48.1406 5.37719Z" fill="#262626"/>
</g>
<defs>
<clipPath id="clip0_143_166">
<rect width="108.108" height="16" fill="white" transform="translate(0.0270233)"/>
</clipPath>
</defs>
</svg>
`;

const fordXSIcon = `<svg width="47" height="16" viewBox="0 0 47 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.4834 0C10.7983 0 0.497009 3.58515 0.497009 8C0.497009 12.4321 10.7964 16 23.4987 16C36.2029 16 46.485 12.4321 46.485 8C46.485 3.58515 36.201 0 23.4834 0ZM23.4987 0.693654C35.7449 0.693654 45.6898 3.97413 45.6898 8C45.6898 12.0431 35.7449 15.3063 23.5006 15.3063C11.2352 15.3063 1.30755 12.0431 1.30755 8C1.30755 3.97605 11.2371 0.693654 23.4987 0.693654ZM17.4819 2.00431C17.1562 2.00431 16.8266 2.01964 16.497 2.04647C14.3145 2.23234 12.2182 3.46635 12.2182 5.34419C12.2182 6.2927 12.8946 7.06874 13.9428 7.03617C15.1787 7.00168 16.1923 6.00335 16.7174 4.76934C16.9032 4.31329 16.5315 4.11018 16.3629 4.38036C16.0563 4.8709 15.6002 5.24264 15.1269 5.48024C14.5521 5.75042 13.9274 5.68335 13.7396 5.21006C13.4867 4.53365 14.0271 3.55258 15.2802 3.07737C17.0891 2.4182 18.9669 2.85892 20.7931 3.19617C20.8103 3.19617 20.9119 3.2479 20.8275 3.29772C20.5056 3.46635 20.1837 3.61964 19.6778 4.04312C19.3214 4.36312 18.8481 4.77126 18.4937 5.21006C18.1372 5.65078 17.8843 6.03785 17.5452 6.47856C17.4953 6.54563 17.4455 6.54563 17.4455 6.54563C16.6158 6.67976 15.8206 6.78323 15.0771 7.2891C14.9238 7.39066 14.874 7.59569 14.9583 7.72982C15.0426 7.86395 15.2285 7.88312 15.3646 7.77964C15.8206 7.42515 16.2939 7.27186 16.8362 7.25653C16.8515 7.25653 16.8687 7.25653 16.8687 7.27186C16.8879 7.27186 16.8879 7.29102 16.8687 7.30635C16.0582 8.44072 15.8532 8.69365 15.2458 9.38731C14.9373 9.72674 14.6158 10.054 14.2819 10.3684C12.8946 11.6522 11.4077 11.6369 10.8654 10.8244C10.5435 10.3339 10.5952 9.82802 10.7983 9.40455C11.0666 8.87952 11.5744 8.50778 12.0151 8.28743C12.1837 8.20311 12.2355 8 12.0668 7.81413C11.9653 7.68 11.7104 7.66084 11.5246 7.69533C10.8382 7.85474 10.2332 8.25836 9.82245 8.83093C9.41171 9.4035 9.22325 10.1059 9.29222 10.8072C9.42635 12.229 10.5952 13.0568 11.9308 13.0395C12.9789 13.0242 13.9772 12.7023 15.1614 11.5008C16.2766 10.3511 17.3075 8.65916 18.2561 7.08599C18.2905 7.03617 18.3078 7.00168 18.4592 6.98443C19.0532 6.91737 19.948 6.83306 20.5056 6.79856C20.6244 6.78324 20.6589 6.78132 20.7087 6.8503C20.8429 7.03617 21.0805 7.18755 21.251 7.29102C21.3526 7.34084 21.3852 7.35808 21.4522 7.35808C21.5384 7.35808 21.6055 7.32359 21.6381 7.27186C21.7071 7.20479 21.7243 7.12048 21.6898 7.07066C21.6553 7.00168 21.2683 6.78323 21.2491 6.69701C21.2338 6.64719 21.3008 6.62994 21.3008 6.62994C21.4665 6.58421 21.6209 6.50502 21.7547 6.39725C21.8885 6.28947 21.9988 6.15542 22.0788 6.00335C22.2647 5.64886 22.2819 5.19282 21.96 4.93797C21.6726 4.70228 21.251 4.7521 20.8946 5.05677C20.7402 5.19889 20.6226 5.37635 20.5518 5.57393C20.4811 5.77151 20.4593 5.9833 20.4884 6.19114C20.5075 6.2582 20.4884 6.2927 20.4041 6.2927C19.881 6.32527 19.3732 6.34252 18.8137 6.37701C18.7638 6.37701 18.7638 6.35785 18.7811 6.32527C19.423 5.21006 20.3868 4.41485 21.4522 3.61964C21.5212 3.5679 21.504 3.46635 21.504 3.38204C23.4316 3.80359 25.2922 4.58347 27.2889 4.56623C28.0994 4.56623 28.8946 4.44743 29.6553 4.02587C30.3164 3.65413 30.5866 3.33222 30.6038 2.97772C30.6192 2.74012 30.4505 2.58874 30.2149 2.63856C28.2029 3.11186 26.2733 3.09461 24.2613 2.85892C21.9658 2.57725 19.7641 1.99665 17.48 2.00431H17.4819ZM30.5693 2.74012C30.5693 2.75737 30.5866 2.75737 30.5866 2.7727C30.5866 2.75737 30.5693 2.74012 30.5693 2.74012ZM21.525 5.24647C21.5729 5.24647 21.617 5.2618 21.6553 5.29437C21.7569 5.37868 21.7071 5.61437 21.6055 5.76767C21.495 5.94572 21.3187 6.07308 21.115 6.12216C21.0805 6.14132 21.0479 6.12216 21.0307 6.03785C21.0142 5.91042 21.0287 5.78092 21.0727 5.66022C21.1167 5.53952 21.189 5.43114 21.2836 5.34419C21.3497 5.28357 21.4354 5.24886 21.525 5.24647ZM36.5056 5.27713C36.4213 5.27713 36.3715 5.29437 36.3198 5.37868C36.1856 5.64886 34.4611 8.22036 34.1372 8.72815C34.0874 8.81246 34.0204 8.79521 34.0031 8.70898C33.9686 8.40623 33.7157 8.06707 33.3095 7.91569C33.014 7.79781 32.6921 7.7627 32.3782 7.81413C31.8225 7.8812 31.3128 8.18587 30.874 8.52311C30.1976 9.0309 29.6228 9.69198 28.8774 10.1825C28.4731 10.4508 27.9135 10.6731 27.5418 10.3358C27.2026 10.0292 27.2371 9.33557 27.7622 8.79521C27.812 8.74347 27.881 8.77796 27.8637 8.8297C27.8367 8.94773 27.8413 9.07079 27.877 9.18649C27.9126 9.3022 27.9781 9.40648 28.0668 9.48886C28.2853 9.69198 28.6072 9.70922 28.8946 9.57318C29.05 9.49119 29.1834 9.37299 29.2834 9.22857C29.3835 9.08416 29.4473 8.91776 29.4695 8.74347C29.4871 8.61621 29.4784 8.48668 29.444 8.36291C29.4096 8.23913 29.3501 8.12373 29.2693 8.02387C29.1884 7.924 29.088 7.84178 28.9741 7.7823C28.8602 7.72283 28.7353 7.68736 28.6072 7.67808C28.1856 7.64551 27.7622 7.79689 27.3732 8.13605C27.1805 8.28739 27.0147 8.47005 26.8826 8.67641C26.8481 8.74347 26.7811 8.74347 26.7811 8.65916C26.7983 7.96551 26.5109 7.5612 25.9341 7.54395C25.4781 7.52479 25.0048 7.77964 24.6311 8.06707C24.2186 8.43226 23.8343 8.82812 23.4814 9.25126C23.4316 9.30299 23.399 9.30299 23.3818 9.20144C23.3748 8.76745 23.2581 8.34229 23.0426 7.96551C22.9583 7.84862 22.805 7.79689 22.6709 7.8812C22.6038 7.91569 22.4007 8.01533 22.2302 8.13605C22.1459 8.20312 22.1286 8.28934 22.1631 8.40431C22.3662 9.09988 22.3317 9.89509 22.0443 10.5543C21.7914 11.1636 21.2836 11.7212 20.6915 11.9071C20.3025 12.0259 19.8963 11.9741 19.6434 11.6196C19.3042 11.1463 19.4402 10.3166 19.948 9.623C20.4041 9.01557 21.0479 8.62659 21.7071 8.38898C21.7914 8.35449 21.7914 8.30467 21.7741 8.23569C21.74 8.12706 21.7004 8.02026 21.6553 7.91569C21.5883 7.7624 21.4369 7.72982 21.2146 7.74707C20.7512 7.80901 20.3038 7.95857 19.8963 8.18779C18.7983 8.77796 18.2388 9.92767 17.9859 10.537C17.8671 10.8244 17.7655 11.0103 17.6467 11.1789C17.4781 11.3993 17.2577 11.6024 16.8534 11.9569C16.8189 11.9914 16.7844 12.0584 16.8189 12.1274C16.9019 12.2758 17.0044 12.4124 17.1236 12.5337C17.1907 12.5662 17.2577 12.5145 17.2922 12.4992C17.5809 12.3032 17.8425 12.0699 18.0702 11.8055C18.1219 11.7384 18.189 11.771 18.2235 11.8726C18.2974 12.1439 18.4359 12.3932 18.6271 12.5994C18.8183 12.8056 19.0565 12.9625 19.3214 13.0568C20.337 13.3959 21.3852 12.9035 22.1804 12.0412C22.6881 11.5008 22.874 11.1463 23.0599 10.9107C23.3818 10.5025 24.041 9.5885 24.8036 9.01365C25.091 8.79521 25.411 8.64192 25.5796 8.74539C25.7138 8.8297 25.7655 9.03282 25.5452 9.41988C24.7672 10.857 23.6002 12.5337 23.399 12.9552C23.3646 13.0242 23.399 13.074 23.4661 13.074H24.6503C24.7174 13.074 24.7346 13.0395 24.7672 13.0069C25.3765 12.0584 25.9361 11.1636 26.5435 10.2323C26.578 10.1825 26.6125 10.2151 26.6125 10.2496C26.6243 10.4963 26.6877 10.7378 26.7983 10.9586C26.8933 11.115 27.0273 11.244 27.1872 11.3331C27.3471 11.4221 27.5274 11.468 27.7104 11.4663C27.9671 11.472 28.2217 11.4203 28.4558 11.315C28.7087 11.2134 28.9119 11.0946 29.0632 10.9931C29.1495 10.926 29.1648 11.0448 29.1648 11.0448C29.0307 11.7883 29.1993 12.685 29.9428 13.0395C30.8395 13.4802 31.8206 12.8537 32.3782 12.3114C32.4299 12.2616 32.497 12.2616 32.497 12.3804C32.5097 12.6226 32.6121 12.8515 32.7844 13.0223C33.2577 13.4975 34.2062 13.3097 35.1701 12.5662C35.7794 12.0929 36.4213 11.4165 36.9962 10.7229C37.0134 10.6884 37.0307 10.6558 36.9962 10.6041C36.9119 10.5198 36.7758 10.401 36.6915 10.3166C36.6589 10.2841 36.5899 10.2994 36.5574 10.3166C35.9634 10.8743 35.423 11.5353 34.6623 12.0604C34.4093 12.2462 33.9859 12.3804 33.8 12.1447C33.7329 12.0431 33.7329 11.9071 33.8 11.7384C34.0529 11.1444 37.6228 5.7006 37.8086 5.37677C37.8412 5.32695 37.8086 5.27713 37.7416 5.27713H36.5056ZM32.7461 8.68791C32.8381 8.68791 32.9262 8.70707 33.0048 8.74539C33.4455 8.94659 33.3095 9.45437 33.1063 9.8606C33.0891 9.89509 33.0891 9.91042 33.0891 9.94491C33.0891 9.9794 33.1581 10.0292 33.2079 10.0465C33.2252 10.0465 33.2424 10.0637 33.2079 10.1135C33.0546 10.4354 32.9205 10.6213 32.7346 10.9087C32.5634 11.1559 32.3583 11.3778 32.1253 11.5679C31.7708 11.8745 31.263 12.1945 30.8568 11.9741C30.6709 11.8726 30.5866 11.6196 30.6038 11.4165C30.6192 10.8244 30.8721 10.2323 31.3473 9.64024C31.8283 9.05006 32.3437 8.69174 32.7461 8.68791Z" fill="#262626"/>
</svg>
`;

const vwXSIcon = `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.85229 0C4.42563 0 0.852295 3.57333 0.852295 8C0.852295 12.4267 4.42563 16 8.85229 16C13.279 16 16.8523 12.4267 16.8523 8C16.8523 3.57333 13.279 0 8.85229 0ZM8.85229 0.94C9.6523 0.94 10.4256 1.08667 11.139 1.33333L8.93896 6.08667C8.9123 6.11333 8.9123 6.17333 8.85229 6.17333C8.79229 6.17333 8.79229 6.11333 8.76563 6.08667L6.56563 1.33333C7.27896 1.08667 8.0523 0.946667 8.85229 0.946667M5.4523 1.82667L7.99896 7.31333C8.0523 7.42667 8.1123 7.46 8.18563 7.46H9.51896C9.59896 7.46 9.6523 7.42667 9.7123 7.31333L12.2256 1.82667C13.279 2.42667 14.1856 3.28667 14.8256 4.31333L11.2523 11.2267C11.2256 11.2867 11.1856 11.3133 11.1656 11.3133C11.1123 11.3133 11.1123 11.26 11.079 11.2267L9.7123 8.2C9.6523 8.08667 9.59896 8.06 9.51896 8.06H8.18563C8.1123 8.06 8.0523 8.08667 7.9923 8.2L6.62563 11.2267C6.5923 11.26 6.59896 11.3133 6.53896 11.3133C6.47896 11.3133 6.47896 11.26 6.45229 11.2267L2.85229 4.31333C3.47896 3.28667 4.39896 2.42667 5.4523 1.82667ZM2.22563 5.68667L6.33896 13.6867C6.39229 13.8 6.45229 13.8867 6.59896 13.8867C6.73896 13.8867 6.79229 13.8 6.85229 13.6867L8.76563 9.42667C8.79229 9.37333 8.82563 9.33333 8.85229 9.33333C8.9123 9.33333 8.9123 9.4 8.93896 9.42667L10.879 13.6867C10.939 13.8 10.9923 13.8867 11.139 13.8867C11.279 13.8867 11.339 13.8 11.3923 13.6867L15.519 5.68667C15.7656 6.4 15.9123 7.17333 15.9123 8C15.879 11.86 12.7123 15.06 8.85229 15.06C4.9923 15.06 1.82563 11.86 1.82563 8C1.82563 7.2 1.96563 6.43333 2.22563 5.68667Z" fill="#262626"/>
</svg>
`;

function placeIcon(name) {


    switch (name.toLowerCase()) {
        case "audi":
            return audiXSIcon;
        case "tesla":
            // console.log("returned tesla")
            return teslaXSIcon
        case "dodge":
            return dodgeXSIcon
        case "ford":
            return fordXSIcon
        case "volkswagen":
            return vwXSIcon
    }


}

// Function to create a card for each car
function createCarCard(car) {

    const imagePath = `${car.imagePath}`

    const altText = `${car.brand} ${car.model}`;

    // console.log(car.brand);
    const brandLogoSvg = placeIcon(car.brand);
    // console.log(brandLogoSvg)

    return `<a class="sales__card" href="#">
              <article class="card--layout">
                  <div class="car-card__text">
                      <h5 class="text-xl-sb">${car.price}</h5>
                      <h6 class="text-sm-sb">${car.model}</h6>
                      <div class="details">
                          <p class="text-xs-r">${car.gear}</p>
                          <p class="text-xs-r">${car.power} / ${car.range}</p>
                      </div>
                  </div>
                  <img src="${imagePath}" alt="${altText}">
                  <div class="brand">
                      ${brandLogoSvg}
                  </div>
              </article>
            </a>`;
}

// Function to load the JSON and create cards
function loadCars(fromPath, forContainerWithId) {
    console.log("loading cars...");
    fetch(fromPath) // Path to your JSON file
        .then(res => res.json())
        .then(data => {
            const cardsContainer = document.getElementById(forContainerWithId);
            data.cars.forEach(car => {
                const carCardHTML = createCarCard(car);
                cardsContainer.innerHTML += carCardHTML;
            });
        })
        .catch(error => console.error("Error loading the JSON: ", error));
}

loadCars("logic/offer-cars-data.json", 'cards-container');

loadCars("logic/e-cars-data.json", "e-cars-cards-container");
loadCars("logic/car-models-data.json", "all-models-cards-container");