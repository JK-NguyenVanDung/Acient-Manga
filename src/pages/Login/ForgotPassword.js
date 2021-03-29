import React from "react";
import { MetaDecorator } from "../../components";

export const ForgotPassword = () => {
  return (
    <div class="main-content ">
      <MetaDecorator
        title="Khởi tạo mật khẩu"
        description="Forgot Password Page"
      />

      <div class="row ">
        <div class="FProw col-md-4 centered">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="text-center">
                <h3>
                  <i class="fa fa-lock fa-4x"></i>
                </h3>
                <h2 class="text-center">Quên mật khẩu?</h2>
                <p>Bạn có thể đổi lại mật khẩu ở đây.</p>
                <div class="panel-body">
                  <form class="form">
                    <fieldset>
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="glyphicon glyphicon-envelope color-blue"></i>
                          </span>

                          <input
                            id="emailInput"
                            placeholder="Địa chỉ email"
                            class="form-control"
                            type="email"
                            oninvalid="setCustomValidity('Xin nhập đúng địa chỉ email!')"
                            onchange="try{setCustomValidity('')}catch(e){}"
                            required=""
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <input
                          class="btn btn-lg btn-primary btn-block"
                          value="Tạo mật khẩu mới"
                          type="submit"
                        />
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
