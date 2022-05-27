import React from "react";
import Comment from "./Components/Comment";
import { faker } from "@faker-js/faker";
import ApprovalCard from "./Components/ApprovalCard";

function App() {
return (
<div className="App">
  <div class="ui secondary pointing menu">
    <a class="active item">
      Home
    </a>
    <a class="item">
      Messages
    </a>
    <a class="item">
      Friends
    </a>
    <div class="right menu">
      <a class="ui item">
        Logout
      </a>
    </div>
  </div>
  <div class="ui segment">
    <p></p>
  </div>
  <div className="ui container comments cards">
    <div className="cards">
      <ApprovalCard>
        <Comment image={faker.image.avatar()} name='Сергей' content='Хороший пост!!!' />
      </ApprovalCard>
      <ApprovalCard>
        <Comment image={faker.image.avatar()} name='Сергей' content='Хороший пост!!!' />
      </ApprovalCard>
      <ApprovalCard>
        <Comment image={faker.image.avatar()} name='Сергей' content='Хороший пост!!!' />
      </ApprovalCard>
    </div>
  </div>
</div>
);
}


export default App;