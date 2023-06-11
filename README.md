![화면 기록 2023-03-28 오전 10 26 50 (online-video-cutter com)](https://user-images.githubusercontent.com/51476641/228104111-d860c436-5ef5-4af9-9237-84b26f9b002b.gif)

내 api key 훔쳐 쓰면 지구 끝까지 쫓아감.\
gpt-3.5 api 무료 사용기간 만료 되어서 이제 답변 받는 기능은 못해요 ㅠㅠ\
https://yangdongsuk.github.io/aiteacher
<<<--- 직접 해보셈.
로그인 안해도 게스트 모드로 할 수 있게 함. \
1주차 1번 문제로 테스트 해보셈.\
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
