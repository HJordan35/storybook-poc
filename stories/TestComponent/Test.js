import "./_Test.scss";
import { tabScript } from "./tabs";

const markup = () => {
<div class="container--tabs">
      <section class="row">
        <ul class="nav nav-tabs">
          <li class="active">
            <a href="#tab-1">Tab 1</a>
          </li>
          <li class="">
            <a href="#tab-2">Tab 2</a>
          </li>
          <li class="">
            <a href="#tab-3">Tab 3</a>
          </li>
        </ul>
        <div class="tab-content">
          <div id="tab-1" class="tab-pane active">
            <span class="glyphicon glyphicon-leaf glyphicon--home--feature two columns text-center"></span>
            <span class="col-md-10">
              <h3>Feature 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </span>
          </div>
          <div id="tab-2" class="tab-pane">
            <span class="glyphicon glyphicon-fire glyphicon--home--feature two columns text-center"></span>
            <span class="col-md-10">
              <h3>Feature 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </span>
          </div>
          <div id="tab-3" class="tab-pane">
            <span class="glyphicon glyphicon-tint glyphicon--home--feature two columns text-center"></span>
            <span class="col-md-10">
              <h3>Feature 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </span>
          </div>
        </div>
      </section>
    </div>
    <script>${tabScript}</script>
}

export const Test = (title) => {
  return ``;
};

export default Test;
