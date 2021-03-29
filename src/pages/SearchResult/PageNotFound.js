import React from "react";
import { MetaDecorator } from "../../components";
export function PageNotFound() {
  return (
    <div class="row main-content">
      <MetaDecorator title="PageNotFound" description="PageNotFound" />
      <div class="col-md pageNF">
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </div>
    </div>
  );
}
