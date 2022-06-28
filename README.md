# 데이터 시각화 프로젝트

[프로젝트 소개](#프로젝트-소개)

[프레임워크](#사용한-프레임워크)

[사용 방법](#사용-방법)

[문제점](#문제점)

# 프로젝트 소개

csv 파일을 넣으면 이를 차트로 시각화해주는 프로젝트이다.

단일 데이터 파일에 대하여 작동하며, 하나 또는 여러개의 attribute에 대하여 차트를 그릴 수 있다.

지원하는 차트 타입은 막대 차트, 선 차트이다.

[배포된 페이지](https://lifeisalone.github.io/DataVisualize/)

<br />

## 사용한 프레임워크

- React

- Rechart

# 사용 방법

![image](https://user-images.githubusercontent.com/58796245/176097210-bac42c2c-812f-4671-b609-fb8df3f526aa.png)
1. 파일을 삽입한다.

![image](https://user-images.githubusercontent.com/58796245/176097364-854157b4-d311-4298-8350-cbbcd545afd9.png)
2. 파일에 담긴 데이터를 확인할 수 있다.

![image](https://user-images.githubusercontent.com/58796245/176097435-73eb6f8c-1f95-4a22-bd75-5c335cb6f56d.png)
![image](https://user-images.githubusercontent.com/58796245/176097689-345141af-5fa1-48a8-8461-02f2e794cabd.png)
![image](https://user-images.githubusercontent.com/58796245/176097756-a4493071-58b0-469b-a975-c0e3a7c02e88.png)

3. 위의 사진 중 첫번째 사진은 차트를 그리기 전의 모습이며 차트 위의 버튼들을 선택하여 그리고 싶은 attribute에 대한 그래프를 그릴 수 있다.


# 문제점

데이터 형식에 제한이 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e05b77da-fa34-4e7a-b396-55f70db0b669/Untitled.png)

위의 사진처럼 첫번째 컬럼이 구분요소이고 나머지가 숫자데이터여야 사용할 수 있다.

이 형식을 벗어나면 사용할 수 없다.

추후에 더 유연하게 적용할 수 있도록 개선 방법을 찾아 볼 계획이다.
