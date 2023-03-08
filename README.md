
https://yangdongsuk.github.io/aiteacher
<<<--- 직접 해보셈. 구글 로그인 필수임. 아직 문제들 안 넣어서 아무거나 선택해서 해보셈. 
특별히 예제도 드림.
# 0. 예제 문제
  밑의 코드에서 #student answer1,2,3를 채워 넣으세요.
    
    num_list1=[]
    num_list2=[]
    num_list3=[]
    
    for i in range(1,51):
         if #student answer1
              num_list1.append(i)
         if #student answer2
              num_list2.append(i)
         if #student answer3
              num_list3.append(i) 
    print("50까지의 수에서 짝수이면서 3의 배수는 : ₩n",num_list1)
    print("50까지의 수에서 3의 배수이거나 7의 배수는 : ₩n",num_list2)
    print("50까지의 수에서 5의 배수가 아닌 수는 : ₩n",num_list3)`
# 1. 문법 오류 



    num_list1=[]
    num_list2=[]
    num_list3=[]

    for i in range(1,51):
        if i%2=0 and i%3=0:
            num_list1.append(i)
        if i/3=0 or i/7=0:
            num_list2.append(i)
        if i%5!=0:
            num_list3.append(i) 
    print("50까지의 수에서 짝수이면서 3의 배수는 : ₩n",num_list1)
    print("50까지의 수에서 3의 배수이거나 7의 배수는 : ₩n",num_list2)
    print("50까지의 수에서 5의 배수가 아닌 수는 : ₩n",num_list3)
## 에러 코드:
      File "/Users/yangdongsuk/컴사코/test3.py", line 6
        if i%2=0 and i%3=0:
              ^
    SyntaxError: invalid syntax

# 2. 논리 오류
    num_list1=[]
    num_list2=[]
    num_list3=[]

    for i in range(1,51):
        if i%2==0 and i%3==0:
            num_list1.append(i)
        if i%3==0 and i%7==0:
            num_list2.append(i)
        if i%5!=0:
            num_list3.append(i) 
    print("50까지의 수에서 짝수이면서 3의 배수는 : ₩n",num_list1)
    print("50까지의 수에서 3의 배수이거나 7의 배수는 : ₩n",num_list2)
    print("50까지의 수에서 5의 배수가 아닌 수는 : ₩n",num_list3)


## 출력창:
    50까지의 수에서 짝수이면서 3의 배수는 : ₩n [6, 12, 18, 24, 30, 36, 42, 48]
    50까지의 수에서 3의 배수이거나 7의 배수는 : ₩n [21, 42]
    50까지의 수에서 5의 배수가 아닌 수는 : ₩n [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24, 26, 27, 28, 29, 31, 32, 33, 34, 36, 37, 38, 39, 41, 42, 43, 44, 46, 47, 48, 49]


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

# This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# aiteacher

> > > > > > > origin/main
