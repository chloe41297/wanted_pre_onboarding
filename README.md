## 실행 방법

```
 1. git clone or download files
 2. yarn install 
 3. yarn start
 ```
## 배포 링크
[![Netlify Status](https://api.netlify.com/api/v1/badges/9fbf5eb0-f894-4a92-8b79-4444be369184/deploy-status)](https://app.netlify.com/sites/chloe41297-wanted-preonboarding/deploys)
[🔗 클릭해서 배포 사이트로 이동](https://chloe41297-wanted-preonboarding.netlify.app/)

## Components

### 1️⃣ Toggle

https://user-images.githubusercontent.com/79011228/152491689-069946cc-1c54-4f24-9ed6-57ab1cb7aa02.mov

#### 👩🏻‍💻 구현 방법
+ ` < Input type="checkbox"/> `를 사용하여 별도로 클릭을 여부를 확인하지 않아도 반복되는 클릭에 toggle 이 'on' 과 'off' 가 번갈아 가며 보이도록 만들었습니다.
+ ` <label> `태그를 사용해서 check-box를 `display:none`으로 숨겨 check-box 대신에 label 이 보이게 만들었습니다.
+ `::after` 가상 선택자로 토글을 선택시 움직이는 하얀 원을 만들었고, checkbox가 `:checked`되었을때 오른쪽으로 움직이게 만들었습니다.
+ `transition` animation을 통해 부드러운 움직임을 주었습니다.
+  `useState`로 상태관리를 하면서 현재 상태에 따라 하단의 문구가 바뀌게 만들었습니다.
#### 🛠 Error Handle
+ label tag의 사용법은 알았지만 꼭 `for` 와 `id` 값으로 연결해야 하는것으로 알았습니다.    
  하지만 `label tag` 안에 `input tag`를 감싸면 똑같이 작동한다는 것을 새로 알았습니다.

### 2️⃣ Modal
https://user-images.githubusercontent.com/79011228/152491343-02e4bf66-848a-451d-b26d-6d0fc940c16e.mov

#### 👩🏻‍💻 구현 방법
+ `<button>` 을 이용해 modal button의 접근성을 높였습니다.
+ ` modal button` 을 누르면 상태가 `openend`가 `true`로 바뀌면서 modal이 보여집니다.
+ `x 버튼`이나 모달의 바깥 부분을 누르면 닫히게 구현하고자, `Modal-Close`의 클래스명을 가진 속성들을 누르면 닫히게 구현하였습니다.
#### 🛠 Error Handle
+ 모달창이 떠 있음에도 불구하고 화면 뒤쪽의 scroll이 작동이 문제였습니다. 모달창이 보통 새로운 알림이 생기거나, 중요한 이벤트에 대한 알림으로 띄우는데, 모달이 존재하는데에도 스크롤이 가능하면 사용자의 시선이나 집중력이 분산되어 본래의 모달의 기능을 잘 하지 못한다고 생각합니다. 그래서 modal이 `open` 되었을때 `body.overflow = hidden` 속성을 주어서, 전체가 스크롤되지 않게 만들었습니다.

### 3️⃣ Tab
https://user-images.githubusercontent.com/79011228/152491417-4a5e3468-70ee-4fdd-a825-502ed41586fd.mov
#### 👩🏻‍💻 구현 방법
+ `TabData` 를 `Array`에 각각 `Object`로 저장을 하여 `index`,`title`,`content`등의 정보르 담습니다.
+ 상단에 `TabData`를 순회하며 `title`을 보여주며 클릭 이벤트를 할당해 줍니다.
+ 현재 클릭된 `title`의 상태를 저장하기 위해 `useState`을 사용하여 클릭된 title의 index를 저장합니다.
+ `state`과 `index`가 일치해야 화면에 보이게 처리를 했습니다.

### 4️⃣ Tag
https://user-images.githubusercontent.com/79011228/152734510-98649c1a-9f27-4ac7-99ab-da9833000029.mov
#### 👩🏻‍💻 구현 방법
+ `input`에 값을 넣고 `enter` 를 누르면 `state` 에 배열로 저장이 됩니다.
+ 저장된 배열을 순회를 하며 `list`로 tag들을 보여줍니다.
+ tag 내의 `x 버튼`을 누르면 `click event`로 연결이 되면서 해당 index를 넘겨주어 `state`에서 해당 tag를 삭제 합니다.
+ `input`의 가로 너비는 동적으로 늘었다 줄어들게 만들엇고, tag를 포함한 요소의 크기를 감싸고 있는 요소에서 뺀 값이 `input`의 너비 입니다.
+ 이론상으로 `tag`를 무한개 추가할 수 있지만. 그렇게 되면 `input box`가 오른쪽으로 계속 밀리고 너비가 줄기 때문에, 한정된 화면에서 적절하게 보이도록 하기 위해 3개 까지만 입력이 가능하게 만들었습니다.
+ 3개이상 추가를 하려고 하면 `input`을 `disabled`하여 입력이 불가능 하게 만들었고, 하단에 3개까지만 입력이 가능하다고 명시적을 사용자애게 보여줍니다.
#### 🛠 Error Handle
+ 과제 예시처럼 만들기 위해서 `tag element`와 `input box`를 `flex-box`로 나란히 두었더니, `tag element`가 커질수록 `input box`가 오른쪽으로 밀리면서 UI적으로 box 바깥으로 `placeholder`가 보이는 현상이 있었습니다.  
이를 해결하기 위해 여러가지 고민을 해 보았는데, tag elements 를 input과 같은 선에 두지 않고, 따로 하단에 두는 방식을 생각했었습니다.   
하지만, 과제 예시와는 많이 달라서 다른 방법을 고안했습니다. tag의 개수를 제한하여 해결하였습니다. 사용자에게 한계를 주는 방식이지만, 대부분의 서비스에서 태그의 최대 갯수를 지정하기도 해서 선택한 방식 입니다.
꼭 과제만이 아니라 다른 방식으로 만들 수 있다면 더 개선할 생각이 있습니다.

### 5️⃣ Auto complete

https://user-images.githubusercontent.com/79011228/152751321-4ced57f1-e5b1-4a9a-b784-fa2a3d557e09.mov

#### 👩🏻‍💻 구현 방법
+ `input`에 `onChange`이벤트를 주어 타이핑값을 얻어 미리 저장해 둔 `data`와 비교를 합니다.
+ `data`와의 비교는 `matchName`함수에서 이루어 집니다. `data`array에 들어있는 문자열을 순회하며 `input` 값의 길이로 잘라 값이 일치하면 return 합니다.
+ `return` 된 값들을 `state`에 `searchResult`로 저장해 검색창 하단에 보여줍니다.
+ 하단의 `list`들 중에 하나를 선택을 하면 선택한 값을 input value로 바꾸어 주며 하단의 list들도 사라지게 새로 갱신합니다.
+ 검색창 오른쪽의 `x 버튼`을 누르면 input value를 없어지게 만들어 검색어가 지워지게 만들었습니다.
#### 🛠 Error Handle
+ 추천 검색어를 보여줄때 array에 저장한 순서 그대로 나오게 되어 실제 구글등의 검색엔진의 검색창과 달라 검색어의 길이 순서대로 보이게 처리하였습니다.
+ 추천 검색어들이 생겼다 없어졌다 하며 화면의 요소들이 움직이는 문제가 있었는데, css 디자인 적으로 검색창 및에 `position:absolute`로 위치를 정해 검색어가 많이 생겨도 요소들이 움직이지 않습니다.

### 6️⃣ Click to Edit
https://user-images.githubusercontent.com/79011228/152491506-42d91df8-b70a-468f-9271-1099fcef0675.mov
#### 👩🏻‍💻 구현 방법
+ input에 쓴 정보를 `onChange`이벤트를 통해서 state으로 저장을 합니다.
+ state에 저장된 값을 inputbox 외부를 클릭할때 새로운 state롤 저장이 된 후 화면 하단에 보여집니다.
+ 공백이 있을 예외를 생각해서 input에 들어 있는 값이 공백일때는 `___` 를 보여주어 사용자에게도 보기 좋게 예외처리를 하였습니다.
#### 🛠 Error Handle
+ input 값에 공란이 생겼을때가 가장 고민이였습니다. 그냥 비워두기에는 사용자에게 무언가를 써야한다는 인신이 생기지 않고, 명시적으로 '이름을 써 주세요'라는 말은 정보를 제대로 보여주지 않는것 처럼 보였습니다.
그래서 최종적으로 밑줄을 보여주며 예외처리를 하였고, 밑줄로 공란이 있음을 보여줌과 동시에 이름과 나이를 쓰면 된다고 알려줄 수 있는 방식이라고 생각합니다.
