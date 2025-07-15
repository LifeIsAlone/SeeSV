# 데이터 시각화 프로젝트

csv 파일을 넣으면 이를 차트로 시각화해주는 프로젝트이다.

단일 데이터 파일에 대하여 작동하며, 하나 또는 여러개의 라벨 필터에 대하여 차트를 그릴 수 있다.

지원하는 차트 타입은 막대 차트, 선 차트이다.

🔗 [see-sv.vercel.app](see-sv.vercel.app)

<br />

- React, JavaScript
- Styled-component, Recharts, PapaParse, Sonner, dom-to-image
- Vercel

# 기능
- CSV 파일 파싱
  - 효율성과 코드 가독성을 고려하여, 다양한 옵션과 멀티스레드 처리를 지원하는 Papaparse 라이브러리 사용
- 시각화 데이터 선택
  - 단순한 형식의 데이터와 숫자 데이터만 차트로 표현할 수 있는 한계점이 존재하여 사용자가 직접 데이터를 선택할 수 있는 기능 구현
- 데이터 차트 시각화
  - recharts의 막대 차트와 선 차트를 이용
- 차트 스크린샷 이미지 저장
  - 시각화 결과를 외부 문서나 보고서에 활용 가능
- 작업 수행 결과와 에러에 대한 알림 UI
  - Sonner 라이브러리를 이용하여 화면 하단에 문구 알림
<img width="456" height="87" alt="image" src="https://github.com/user-attachments/assets/e9534e35-bdd2-4f49-ba93-8bf9855b8e5e" />
<img width="458" height="77" alt="image" src="https://github.com/user-attachments/assets/bd1e436c-9f18-423b-858f-e930e3fcdc0e" />
<img width="455" height="76" alt="image" src="https://github.com/user-attachments/assets/0280c7e8-fc09-4339-8c95-3925abb6bb9c" />
<img width="455" height="76" alt="image" src="https://github.com/user-attachments/assets/fa55c4b2-0eb8-422d-a1d7-dbd9d07bd3d0" />


# 사용 시나리오
### 1. 파일을 삽입한다.
<img width="1796" height="743" alt="image" src="https://github.com/user-attachments/assets/843d7a63-6cee-4d56-b54a-98670a191f74" />

### 2. 차트로 표시할 데이터를 선택한다.
<img width="1859" height="1006" alt="image" src="https://github.com/user-attachments/assets/fdf3673f-6c2f-477f-96a8-caa57dda0a40" />

### 3. 차트를 확인한다.
   
막대 차트, 선 차트 중 고를 수 있으며 하단의 라벨 필터를 이용해서 차트로 표시할 라벨을 고를 수 있다.
<img width="1859" height="1966" alt="image" src="https://github.com/user-attachments/assets/cf4c98b8-2b44-4b3e-a659-1ebb94d6713f" />

숫자가 아닌 데이터를 포함하는 경우, 이를 차트로 표시할 수 없는데 이 경우에는 필터를 비활성화 처리한다. (Beta 비활성화)
<img width="538" height="87" alt="image" src="https://github.com/user-attachments/assets/1046c650-cf00-4baa-8209-d9abac55fd35" />


### 4. 차트 저장하기

'차트 저장' 버튼을 누르면 차트를 이미지로 저장할 수 있다.
![my-chart-image](https://github.com/user-attachments/assets/e5e17ad3-ca30-4177-abab-12d0bc30e5fa)

