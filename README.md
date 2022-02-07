## 실행 방법
```
 yarn install 
 yarn start
 ```
## 배포 링크


## Components

### 1️⃣ Toggle

https://user-images.githubusercontent.com/79011228/152491689-069946cc-1c54-4f24-9ed6-57ab1cb7aa02.mov

#### 👩🏻‍💻 구현 방법
+ ` < Input type="checkbox"/> `를 사용하여 별도로 클릭을 여부를 확인하지 않아도 반복되는 클릭에 toggle 이 'on' 과 'off' 가 번갈아 가며 보이도록 만들었습니다.
+ ` <label> `태그를 사용해서 check-box를 `display:none`으로 숨겨 check-box 대신에 label 이 보이게 만들었습니다.
+ `::after` 가상 선택자로 토글을 선택시 움직이는 하얀 원을 만들었고, checkbox가 `:checked`되었을때 오른쪽으로 움직이게 만들었습니다.
+ `transition` animation을 통해 부드러운 움직임을 주었습니다.
+  `useState`로 상태관리를 하면서 현재 상태에 따라 하단의 문구가 바뀌게 만들었습니다.
#### 🛠 Error Log

### 2️⃣ Modal
https://user-images.githubusercontent.com/79011228/152491343-02e4bf66-848a-451d-b26d-6d0fc940c16e.mov

#### 👩🏻‍💻 구현 방법
+ `<button>` 을 이용해 modal button의 접근성을 높였습니다.
+ ` modal button` 을 누르면 상태가 `openend`가 `true`로 바뀌면서 modal이 보여집니다.
+ `x 버튼`이나 모달의 바깥 부분을 누르면 닫히게 구현하고자, `Modal-Close`의 클래스명을 가진 속성들을 누르면 닫히게 구현하였습니다.
#### 🛠 Error Log
+ 모달창이 떠 있음에도 불구하고 화면 뒤쪽의 scroll이 작동이 문제였습니다. 모달창이 보통 새로운 알림이 생기거나, 중요한 이벤트에 대한 알림으로 띄우는데, 모달이 존재하는데에도 스크롤이 가능하면 사용자의 시선이나 집중력이 분산되어 본래의 모달의 기능을 잘 하지 못한다고 생각합니다. 그래서 modal이 `open` 되었을때 `body.overflow = hidden` 속성을 주어서, 전체가 스크롤되지 않게 만들었습니다.
### 3️⃣ Tab
https://user-images.githubusercontent.com/79011228/152491417-4a5e3468-70ee-4fdd-a825-502ed41586fd.mov
#### 👩🏻‍💻 구현 방법
+ `TabData` 를 `Array`에 각각 `Object`로 저장을 하여 `index`,`title`,`content`등의 정보르 담습니다.
+ 상단에 `TabData`를 순회하며 `title`을 보여주며 클릭 이벤트를 할당해 줍니다.
+ 현재 클릭된 `title`의 상태를 저장하기 위해 `useState`을 사용하여 클릭된 title의 index를 저장합니다.
+ `state`과 `index`가 일치해야 화면에 보이게 처리를 했습니다.
#### 🛠 Error Log

### 4️⃣ Tag

### 5️⃣ Auto complete
https://user-images.githubusercontent.com/79011228/152491561-b39915b5-85f4-4537-bfc9-ffdc1952a702.mov
#### 👩🏻‍💻 구현 방법
+ `input`에 `onChange`이벤트를 주어 타이핑값을 얻어 미리 저장해 둔 `data`와 비교를 합니다.
+ `data`와의 비교는 `matchName`함수에서 이루어 집니다. `data`array에 들어있는 문자열을 순회하며 `input` 값의 길이로 잘라 값이 일치하면 return 합니다.
+ return 된 값들을 state에 searchResult로 저장해 검색창 하단에 보여줍니다.
+ 하단의 list들 중에 하나를 선택을 하면 선택한 값을 input value로 바꾸어 주며 하단의 list들도 사라지게 새로 갱신합니다.
+ 검색창 오른쪽의 x 버튼을 누르면 input value를 없어지게 만들어 검색어가 지워지게 만들었습니다.
#### 🛠 Error Log
+ 추천 검색어를 보여줄때 array에 저장한 순서 그대로 나오게 되어 실제 구글등의 검색엔진의 검색창과 달라 검색어의 길이 순서대로 보이게 처리하였습니다.

### 6️⃣ Click to Edit
https://user-images.githubusercontent.com/79011228/152491506-42d91df8-b70a-468f-9271-1099fcef0675.mov
#### 👩🏻‍💻 구현 방법
+ input에 쓴 정보를 `onChange`이벤트를 통해서 state으로 저장을 합니다.
+ state에 저장된 값을 inputbox 외부를 클릭할때 새로운 state롤 저장이 된 후 화면 하단에 보여집니다.
+ 공백이 있을 예외를 생각해서 input에 들어 있는 값이 공백일때는 `___` 를 보여주어 사용자에게도 보기 좋게 예외처리를 하였습니다.
#### 🛠 Error Log
+ input 값에 공란이 생겼을때가 가장 고민이였습니다. 그냥 비워두기에는 사용자에게 무언가를 써야한다는 인신이 생기지 않고, 명시적으로 '이름을 써 주세요'라는 말은 정보를 제대로 보여주지 않는것 처럼 보였습니다.
그래서 최종적으로 밑줄을 보여주며 예외처리를 하였고, 밑줄로 공란이 있음을 보여줌과 동시에 이름과 나이를 쓰면 된다고 알려줄 수 있는 방식이라고 생각합니다.
