<template>
  <div class="" id="page-content">
    <div class="padding">
      <div class="">
        <div class="">
          <div class="card user-card">
            <div class="flex justify-center">
              <div
                class="col-sm-3 rounded bg-c-lite-green user-profile justify-content-center"
              >
                <div class="card-block text-center text-white">
                  <div class="m-b-25 flex justify-center">
                    <img
                      :src="$auth.user.picture"
                      class="img-radius"
                      alt="User-Profile-Image"
                    />
                  </div>
                  <div class="color">
                    <span class="mt-5">Bem-vindo(a),</span>
                    <h6 class="f-w-601">{{ $auth.user.nickname }}!</h6>
                  </div>
                </div>
              </div>
              <div class="col-sm-9">
                <div class="card-block">
                  <h6 class="m-b-20 p-b-5 b-b-default f-w-600">INFORMAÇÕES</h6>
                  <div class="row">
                    <div class="col-sm-6">
                      <p class="m-b-10 f-w-600">Nome de Usuário</p>
                      <h6 class="text-muted f-w-400">
                        {{ $auth.user.nickname }}
                      </h6>
                    </div>
                    <div class="col-sm-6">
                      <p class="m-b-10 f-w-600">Email</p>
                      <h6 class="text-muted f-w-400">{{ $auth.user.email }}</h6>
                    </div>
                    <div class="col-sm-6">
                      <p class="m-b-10 f-w-600">ID</p>
                      <h6 class="text-muted f-w-400">{{ $auth.user.sub }}</h6>
                    </div>
                  </div>
                </div>
                <div class="card-block">
                  <h6 class="m-b-20 p-b-5 b-b-default f-w-600"></h6>
                  <div class="row"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
body {
  background-color: #f9f9fa;
}

.padding {
  padding: 6rem !important;
}

.user-card-full {
  overflow: hidden;
}

.card {
  border-radius: 5px;
  border: none;
  margin-bottom: 30px;
}

.m-r-0 {
  margin-right: 0px;
}

.m-l-0 {
  margin-left: 0px;
}

.user-card-full .user-profile {
  border-radius: 5px 0 0 5px;
  border-left: 20px;
}

.bg-c-lite-green {
  background: #fff6ee;
}

.user-profile {
  padding: 40px 0;
}

.card-block {
  padding: 1.25rem;
}

.m-b-25 {
  margin-bottom: 25px;
}

.img-radius {
  border-radius: 5px;
  display: flex;
  margin-top: 35px;
}

h6 {
  font-size: 14px;
}

.card .card-block p {
  line-height: 25px;
}

@media only screen and (min-width: 1400px) {
  p {
    font-size: 14px;
  }
}

.card-block {
  padding: 1.25rem;
}

.b-b-default {
  border-bottom: 1px solid #e0e0e0;
}

.m-b-20 {
  margin-bottom: 20px;
}

.p-b-5 {
  padding-bottom: 5px !important;
}

.card .card-block p {
  line-height: 25px;
}

.m-b-10 {
  margin-bottom: 10px;
}

.text-muted {
  color: #bebebe !important;
  font-size: 15px;
}

.b-b-default {
  border-bottom: 1px solid #e0e0e0;
}

.f-w-600 {
  font-weight: 600;
  color: #fff6ee;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 18px;
}
.f-w-601 {
  font-size: 20px;
}
.m-b-20 {
  margin-bottom: 20px;
}

.m-t-40 {
  margin-top: 20px;
}

.p-b-5 {
  padding-bottom: 5px !important;
}

.m-b-10 {
  margin-bottom: 10px;
}

.m-t-40 {
  margin-top: 20px;
}

.user-card-full .social-link li {
  display: inline-block;
}

.user-card-full .social-link li a {
  font-size: 20px;
  margin: 0 10px 0 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.color {
  color: #621200;
  font-size: 20px;
}

.f-w-400 {
  font-size: 20px;
}
</style>
