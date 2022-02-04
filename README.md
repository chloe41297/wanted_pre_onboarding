## 실행 방법
```
 yarn install 
 yarn start
 ```
## 배포 링크


## Components

### 1️⃣ Toggle

https://user-images.githubusercontent.com/79011228/152491689-069946cc-1c54-4f24-9ed6-57ab1cb7aa02.mov

#### 👩🏻‍💻구현 방법
+ ` < Input type="checkbox"/> `를 사용하여 별도로 클릭을 여부를 확인하지 않아도 반복되는 클릭에 toggle 이 'on' 과 'off' 가 번갈아 가며 보이도록 만들었습니다.
+ ` <label> `태그를 사용해서 check-box를 `display:none`으로 숨겨 check-box 대신에 label 이 보이게 만들었습니다.
+ `::after` 가상 선택자로 토글을 선택시 움직이는 하얀 원을 만들었고, checkbox가 `:checked`되었을때 오른쪽으로 움직이게 만들었습니다.
+ `transition` animation을 통해 부드러운 움직임을 주었습니다.
+  `useState`로 상태관리를 하면서 현재 상태에 따라 하단의 문구가 바뀌게 만들었습니다.
#### 🛠Error Log

### 2️⃣ Modal
https://user-images.githubusercontent.com/79011228/152491343-02e4bf66-848a-451d-b26d-6d0fc940c16e.mov

#### 👩🏻‍💻구현 방법
+ `<button>` 을 이용해 modal button의 접근성을 높였습니다.
+ ` modal button` 을 누르면 상태가 `openend`가 `true`로 바뀌면서 modal이 보여집니다.
+ `x 버튼`이나 모달의 바깥 부분을 누르면 닫히게 구현하고자, `Modal-Close`의 클래스명을 가진 속성들을 누르면 닫히게 구현하였습니다.
#### 🛠Error Log
+ 모달창이 떠 있음에도 불구하고 화면 뒤쪽의 scroll이 작동이 문제였습니다. 모달창이 보통 새로운 알림이 생기거나, 중요한 이벤트에 대한 알림으로 띄우는데, 모달이 존재하는데에도 스크롤이 가능하면 사용자의 시선이나 집중력이 분산되어 본래의 모달의 기능을 잘 하지 못한다고 생각합니다. 그래서 modal이 `open` 되었을때 `body.overflow = hidden` 속성을 주어서, 전체가 스크롤되지 않게 만들었습니다.
### Tab
 
https://user-images.githubusercontent.com/79011228/152491417-4a5e3468-70ee-4fdd-a825-502ed41586fd.mov

### Tag

### Auto complete

https://user-images.githubusercontent.com/79011228/152491561-b39915b5-85f4-4537-bfc9-ffdc1952a702.mov

### Click to Edit

https://user-images.githubusercontent.com/79011228/152491506-42d91df8-b70a-468f-9271-1099fcef0675.mov

