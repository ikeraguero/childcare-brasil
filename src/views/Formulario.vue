<template class="teste">
  <v-container class="pa-8" id="teste">
    <h1 class="titulo">Formulário para Adoção</h1>
    <form action="http://www.adoteumgatinho.com.br/finalizar-processo-de-adocao?cat_id=16721" method="post" class="block_form m-b-20 m-b-20" id="adopt">
    <input type="hidden" name="cat_id" value="16721" />
    <p class="msg-erro p-l-10 m-tb-10 p-b-20 red-text">
        <img src="http://www.adoteumgatinho.com.br/templates/public/css/images/redpaw.png" align="middle"> Campos de preenchimento obrigatório.
    </p>

    <fieldset class="row aug_blue bold upper m-tb-20">
        <legend class="upper aug_blue_bg white-text bold m-t-20" style="padding: 2px 15px; display: inline-block;">Sobre você e sua família</legend>
        <div class="col s12 m6 l8">
            <label for="name" class="first-column"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Nome completo:</label>
            <input type="text" name="name" id="name" class="required" />
        </div>
        
        <div class="col s12 m6 l4">
            <label for="cpf" class="first-column"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> CPF:</label>
            <input type="text" name="cpf" id="cpf" class="required" />
        </div>
        
        <div class="col s12">
            <label for="job" class="first-column"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Profissão:</label>
            <input type="text" name="job" id="job" class="required" />
        </div>
        
        
        
        <div class="row">
           <div class="col s12 m6 l6 m-t-10 m-b-0">
               <img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Já adotou antes no Adote um Gatinho?
            </div>
            <label class="col s6 m2 l2">
               <input type="radio" id="had_adopted_yes" name="had_adopted" value="1" class="had_adopted" />
                Sim
            </label>
            <label class="col s6 m2 l2">
               <input type="radio" id="had_adopted_no" name="had_adopted" value="0" class="had_adopted" />
                Não
            </label>            
        
            <div class="col s12" id="had_adopted_box" style="display:none">
                <label for="adopted_cat">Se sim, qual era o nome do gato na ONG e com qual voluntária adotou? </label>
                <input type="text" name="adopted_cat" id="adopted_cat" />
            </div>
        </div>
        
        
        <div class="col s12 m6 l6">
            <label for="Email">
            <img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Email:</label>
            <input type="text" name="email" id="email" class="required email" />
        </div>

        <div class="col s12 m4 l4">
            <label for="telephone">
            <img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Telefone:</label>
            <input type="text" name="telephone" id="telephone" class="required telephone" />
        </div>
        
        <div class="col s12 m3 l2">
            <label for="age">
            <img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Idade:</label>
            <input type="text" name="age" id="age" class="required number"  />
        </div>


        
    </fieldset>
        
    <fieldset class="row aug_blue bold upper m-tb-20">
        <legend class="upper aug_blue bold m-t-20 m-b-10">Dados de endereço</legend>
        <div class="col s12 m9 l10">
            <label for="address">
            <img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Endereço:</label>
            <input type="text" name="address" id="address" class="required"/>
        </div>

        <div class="col s12 m3 l2">
            <label for="address_number">
            <img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Número:</label>
            <input type="text" name="address_number" id="address_number" class="required" />
        </div>

        
        <div class="col s12 m6">
            <label for="address_complement"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Complemento:</label>
            <input type="text" name="address_complement" id="address_complement" />
        </div>

        <div class="col s12 m6">
            <label for="address_neighborhood">
            <img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Bairro:</label>
            <input type="text" name="address_neighborhood" id="address_neighborhood" class="required"/>
        </div>
       
        <div class="col s12 m4 l4">
            <label for="address_cep"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> CEP:</label>
            <input type="text" name="address_cep" id="address_cep" />
        </div>

        <div class="col s12 m6 l6">
            <label for="address_city">
            <img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Cidade:</label>
            <select name="address_city" id="address_city" class="required">
                <option value="Sao Paulo" selected>São Paulo</option>
                <option value="Santo Andre">Santo André</option>
                <option value="Sao Bernardo do Campo">São Bernardo do Campo</option>
                <option value="Sao Caetano do Sul">São Caetano do Sul</option>
            </select>
        </div>

        <div class="col s12 m2 l2">
             <label for="address_state">
             <img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Estado:</label>
            <input type="text" name="address_state" id="address_state" value="SP" class="required" />
        </div>
        
        <div class="col s12 m6 l6 m-b-20">
            <label for="address_type"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Este endereço é:</label>
            <select name="address_type" id="address_type">
                <option value="">Selecione</option>
                <option value="residencial">Residencial</option>
                <option value="comercial">Comercial</option>
                <option value="república/pensão">República/pensão</option>
            </select>
        </div>        
        
        <div class="col s12 m6 l6">
            <label for="number_of_adults_at_home">
            <img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Número de adultos na casa:</label>
            <input type="text" name="number_of_adults_at_home" id="number_of_adults_at_home" class="number" />
        </div>

        <div class="col s12">
           <div class="row">
            <p><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Número de crianças na casa e idades:</p>               
           </div>
           
            
            <div class="row hide-on-med-and-up">
                <div class="col s12 m4" style="margin-bottom: 10px; height: 5rem;">
                    <label for="number_of_kids_at_home" class="kids-home" style="width: 96px; display: inline-block;">Tenho</label>
                    <input type="text" id="number_of_kids_at_home" name="number_of_kids_at_home" class="text-center kids-input" style="margin-bottom: 0px; display: inline-block;" />
                </div>

                <div class="col s12 m8">
                    <label for="kids_age" class="kids-home" style="width: 175px; display: inline-block;">crianças de</label>
                    <input type="text" id="kids_age" name="kids_age" class="kids-input text-center" style="display: inline-block;" />
                    <div class="kids-home" style="margin-top: 66px;">anos</div>
                </div>
            </div>
            
            <div class="row hide-on-small-only">
                <div style="height: 5rem;" class="p-l-20">
                    <label for="number_of_kids_at_home" class="kids-home" style="width: 96px; display: inline-block;">Tenho</label>
                    <input type="text" id="number_of_kids_at_home" name="number_of_kids_at_home" class="text-center kids-input" style="margin-bottom: 0px; display: inline-block; width: 60px; margin-right: 20px;" />
                    <label for="kids_age" class="kids-home" style="width: 175px; display: inline-block;">crianças de</label>
                    <input type="text" id="kids_age" name="kids_age" class="kids-input text-center" style="display: inline-block; width: 100px; margin-right: 20px;" />
                    <div class="kids-home" style="display: inline-block;">anos</div>
                </div>
            </div>
            
            <label class="row">
                <input type="checkbox" id="do_not_have_children" name="do_not_have_children" value="1" /> 
                Não tenho crianças em casa
            </label>
        </div>

        

        <div  class="col s12">
            <p><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Por que adotar um gatinho?</p>
            <textarea name="why_adopt_a_cat" id="why_adopt_a_cat" class="required card-wrapper m-t-10 white" style="height: 12rem;"></textarea>
        </div>
    </fieldset>




    
    <fieldset class="row">
        <legend class="upper aug_blue_bg white-text bold m-t-20" style="padding: 2px 15px; display: inline-block;">Sobre a sua casa</legend>

        <p class="bold upper aug_blue m-t-10"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Se sua casa é alugada, o proprietário permite animais?</p>
        <div class="col s12">
                <label class="inblock col s12" style="margin-bottom: 0px;">
                <input type="radio" value="SIM" name="owner_accept_pets" id="owner_accept_pets_yes" class="required" /> Sim</label>

                <label class="inblock col s12" style="margin-bottom: 0px;">
                <input type="radio" value="NAO" name="owner_accept_pets" id="owner_accept_pets_no" class="required" /> Não</label>

                <label class="inblock col s12" style="margin-bottom: 0px;">
                <input type="radio" value="NAO SEI" name="owner_accept_pets" id="owner_accept_pets_dont_know" class="required" />
                Não sei</label>

                <label class="inblock col s12" style="margin-bottom: 0px;">
                <input type="radio" value="SOU PROPRIETARIO" name="owner_accept_pets" id="owner_accept_pets_own_house" class="required" />
                Minha casa é própria</label>
            </div>


        <div class="col s12">
            <p class="aug_blue bold upper"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Você mora em:</p>

                <label class="inblock col s12" style="margin-bottom: 0px;">
                <input type="radio" value="CASA ABERTA" name="lives_in" id="lives_in_open_house" class="required" />
                Casa aberta (o gatinho poderá entrar e sair livremente para passear)</label>

                <label class="inblock col s12" style="margin-bottom: 0px;">
                <input type="radio" value="CASA FECHADA" name="lives_in" id="lives_in_closed_house" class="required" />
                Casa fechada (não vou deixar meu gato sair)</label>
                
                <label class="inblock col s12 m-b-0">
                <input type="radio" value="CASA DE CONDOMÍNIO" name="lives_in" id="lives_in_condominium" class="required" />
                Casa de condomínio</label>

                <label class="inblock col s12" style="margin-bottom: 0px;">
                <input type="radio" value="APARTAMENTO COM TELAS" name="lives_in" id="lives_in_apartment_with_grille" class="required" />
                Apartamento com telas</label>

                <label class="inblock col s12" style="margin-bottom: 0px;">
                <input type="radio" value="APARTAMENTO SEM TELAS" name="lives_in" id="lives_in_apartment_without_grille" class="required" />
                Apartamento sem telas</label>

                <label class="inblock col s12" style="margin-bottom: 0px;">
                <input type="radio" value="COBERTURA COM TELAS" name="lives_in" id="lives_in_penthouse_with_grille" class="required" />
                Apartamento tipo cobertura com telas </label>

                <label class="inblock col s12" style="margin-bottom: 0px;">
                <input type="radio" value="COBERTURA SEM TELAS" name="lives_in" id="lives_in_penthouse_without_grille" class="required" />
                Apartamento tipo cobertura sem telas </label>

                <label class="inblock col s12" style="margin-bottom: 0px;">
                <input type="radio" value="APARTAMENTO TERREO COM QUINTAL" name="lives_in" id="lives_in_ground_floor_apartment_with_yard" class="required" />
                Apartamento no andar térreo com área externa (quintal)</label>

                <label class="inblock col s12" style="margin-bottom: 0px;">
                <input type="radio" value="APARTAMENTO TERREO SEM QUINTAL" name="lives_in" id="lives_in_ground_floor_apartment_without_yard" class="required" />
                Apartamento no andar térreo sem área externa (quintal)</label>
        </div>

        <div id="lives_in_closed_house_container" class="col s12 casa fechada" style="display: none">
            <p class="bold upper aug_blue"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Se você assinalou <strong class="aug_orange">"Casa Fechada"</strong>, assinale os itens que impedem o gatinho de sair para rua e telhados:</p>

                <label><input type="checkbox" id="items_that_block_your_cat_high_walls" name="items_that_block_your_cat[]" value="MURO ALTO" />
                Muros altos</label>

                <label><input type="checkbox" id="items_that_block_your_cat_grilles_at_windows" name="items_that_block_your_cat[]" value="TELAS NAS JANELAS" />
                Telas nas janelas</label>

                <label><input type="checkbox" id="items_that_block_your_cat_grilles_at_gate" name="items_that_block_your_cat[]" value="TELAS NO PORTAO" />
                Telas no portão ou portão totalmente fechado </label>

                <label><input type="checkbox" id="items_that_block_your_cat_everything_will_be_locked" name="items_that_block_your_cat[]" value="DEIXAREI TUDO FECHADO" />
                Não tenho muros altos nem telas mas vou deixar tudo fechado para ele não sair</label>
        </div>


        <div id="lives_in_apartment_with_grille_container" class="col s12 apartamento com telas" style="display: none">
            <p class="bold upper aug_blue"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Se você assinalou <strong class="aug_orange">"Apartamento com telas"</strong>, responda:</p>

                <label><input type="radio" id="items_that_block_your_cat_all_windows_are_blocked" name="items_that_block_your_cat[]" value="TODAS AS JANELAS TEM TELA" />
                Todas as janelas/sacadas/vitrôs e basculantes têm tela, sem exceção</label>

                <label><input type="radio" id="items_that_block_your_cat_only_the_cats_space_windows_are_blocked" name="items_that_block_your_cat[]" value="NAO TENHO TELAS EM TODAS AS JANELAS, SOMENTE ONDE O GATO CIRCULAR" />
                Não tenho telas em todas as janelas/sacadas/vitrôs/basculantes, somente onde o gato irá circular</label>

                <label><input type="radio" id="items_that_block_your_cat_not_all_windows_are_blocked" name="items_that_block_your_cat[]" value="NAO TENHO TELAS EM JANELAS" />
                Só não tenho telas nas janelas basculantes/vitrôs</label>

                <label><input type="radio" id="items_that_block_your_cat_not_all_windows_are_blocked_but_i_have_chains" name="items_that_block_your_cat[]" value="NAO TENHO TELAS EM JANELAS, MAS POSSUO CORRENTES LIMITADORAS" /> Não tenho telas nas janelas basculantes/vitrôs, mas possuo correntes limitadoras de abertura</label>


        </div>

        <div id="lives_in_apartment_without_grille_container" class="col s12 apartamento sem telas"  style="display: none">
        <p class="aug_blue bold upper"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Se você assinalou <strong class="aug_orange">"Apartamento sem telas"</strong>, responda:</p>
            <div>
                <label><input type="radio" id="items_that_block_your_cat_i_will_install_grilles" name="items_that_block_your_cat[]" value="POSSO COLOCAR AS TELAS EM TODAS AS JANELAS" />
                Posso colocar as telas em todas as janelas/sacadas/vitrôs/basculantes antes da chegada do gatinho</label>

                <label><input type="radio" id="items_that_block_your_cat_i_wont_install_grilles" name="items_that_block_your_cat[]" value="NAO VOU COLOCAR TELAS" />
                Não vou colocar as telas</label>
            </div>
        </div>


        <div id="items_that_your_house_have_container" class="col s12">
        <p class="aug_blue bold upper"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png">  Dentro da sua casa ou apartamento (desconsidere as áreas comuns do condomínio), você possui:</p>
            <div>
                <label><input type="checkbox" id="items_that_your_house_have_swimming_pool" name="items_that_your_house_have[]" value="PISCINA" />
                Piscina</label>

                <label><input type="checkbox" id="items_that_your_house_have_fireplace" name="items_that_your_house_have[]" value="LAREIRA, CHURRASQUEIRA OU FORNO DE PIZZA" />
                Lareira, churrasqueira ou forno de pizza</label>

                <label><input type="checkbox" id="items_that_your_house_have_any_place_that_wont_be_grilled" name="items_that_your_house_have[]" value="ALGUMA PARTE QUE NAO POSSA SER TELADA" />
                Alguma parte que não possa ser telada como, por exemplo, respiro do aquecedor a gás</label>
            </div>
        </div>
        <div id="house_window_types_container" class="col s12">
        <p class="aug_blue bold upper"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Sobre as basculantes, elas são de que tipo:</p>

                <label class="inblock col s4 m3 l2">
                    <img src="http://www.adoteumgatinho.com.br/media/images/window_simple.png" class="col s12">
                    <input type="radio" id="house_window_types_simple" name="house_window_types[]" value="SIMPLES" />
                Simples </label>

                <label class="inblock col s4 m3 l2">
                    <img src="http://www.adoteumgatinho.com.br/media/images/window_double_multiple.png" class="col s12">
                    <input type="radio" id="house_window_types_double_multiple" name="house_window_types[]" value="DUPLA OU MULTIPLA" />
                Dupla ou múltipla </label>

                <label class="inblock col s4 m3 l2">
                    <img src="http://www.adoteumgatinho.com.br/media/images/sem_basculantes.png" class="col s12">
                    <input type="radio" id="house_window_types_neither" name="house_window_types[]" value="NAO TENHO BASCULANTES" />
                Não tenho basculantes</label>

        </div>
    </fieldset>

    <fieldset class="row">
        <legend class="upper aug_blue_bg white-text bold m-t-20" style="padding: 2px 15px; display: inline-block;">Seus animais</legend>
        <div class="col s12 m-t-10">
        <p class="aug_blue bold upper"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Já teve gatos?</p>
            <label class="inblock"><input type="radio" name="already_had_a_cat" id="already_had_a_cat_yes" value="SIM" class="required" /> Sim</label>

            <label class="inblock"><input type="radio" name="already_had_a_cat" id="already_had_a_cat_no" value="NAO" class="required" /> Não</label>
        </div>

        <div id="already_had_a_cat_container" class="col s12">
            <p class="aug_blue bold upper"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Se você já teve gatos, o que aconteceu com eles?</p>
            <textarea name="what_happened_to_your_cats" class="card-wrapper m-t-10 white" style="height: 12rem;"></textarea>
        </div>


        <div class="col s12">
        <p class="aug_blue bold upper"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Tem outros animais em casa?:</p>
           
            <div class="col s12 m-b-0">
                <label><input type="checkbox" name="have_other_pets[]" id="have_other_pets_yes_cats" value="SIM GATO" class="required open_opt" data-pointer="open_cats" />
                Sim, gato(s)</label>
            </div>
            <div class="col s12 m-b-10 open_cats" style="display: none">
                <label for="how_many_cats">Quantos?</label>
                <input type="text" name="how_many_cats" id="how_many_cats">
            </div>
            
            <div class="col s12 m-b-0">
                <label><input type="checkbox" name="have_other_pets[]" id="have_other_pets_yes_dogs" value="SIM CACHORRO" class="required open_opt" data-pointer="open_dogs" />
                Sim, cachorro(s)</label>
            </div>
            <div class="col s12 m-b-10 open_dogs" style="display: none">
                <label for="how_many_dogs">Quantos?</label>
                <input type="text" name="how_many_dogs" id="how_many_dogs">
            </div>

            <div class="col s12 m-b-0">
                <label><input type="checkbox" name="have_other_pets[]" id="have_other_pets_yes_birds" value="SIM PASSARO" class="required open_opt" data-pointer="open_birds" />
                Sim, pássaro(s)</label>
            </div>
            <div class="col s12 m-b-10 open_birds" style="display: none">
                <label for="how_many_birds">Quantos?</label>
                <input type="text" name="how_many_birds" id="how_many_birds">
            </div>

            
            <div class="col s12 m-b-0">
                <label><input type="checkbox" name="have_other_pets[]" id="have_other_pets_yes_others" value="SIM OUTROS" class="required open_opt" data-pointer="open_others" />
                Sim, outro(s)</label>
            </div>
            <div class="col s4 m-b-10 open_others" style="display: none">
                <label for="wich_ones">Qual?</label>
                <input type="text" name="wich_ones" id="wich_ones">
            </div>
            <div class="col s4 m-b-10 open_others" style="display: none">
                <label for="how_many_others">Quantos?</label>
                <input type="text" name="how_many_others" id="how_many_others">
            </div>
            
            <div class="col s12">
                <label><input type="checkbox" name="have_other_pets[]" id="have_other_pets_no" value="NAO" class="required" />
            Não</label>
            </div>

        </div>


<!--
        <div id="cat_qtty_container"  class="col s12">
            <label for="cat_qtty"><p class="aug_blue bold upper"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Quantos gatos você tem?</p></label>
            <input type="text" name="cat_qtty" id="cat_qtty" value="" class="number" />
        </div>
-->
    </fieldset>



    <fieldset class="row">
        <legend class="upper aug_blue_bg white-text bold m-t-20" style="padding: 2px 15px; display: inline-block;">Adoção é compromisso e responsabilidade</legend>
        
        <div class="col s12">
            <label for="adopt_planning" class="aug_blue bold upper"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Há quanto tempo você está planejando essa adoção? </label>
            <input type="text" name="adopt_planning" id="adopt_planning">
        </div>
        <div class="col s12">
            <label for="adopt_everyone" class="aug_blue bold upper"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Todas as pessoas que moram com você estão sabendo e concordam com a adoção?</label>
            <input type="text" name="adopt_everyone" id="adopt_everyone">
        </div>
        
        <div class="col s12">
            <label for="adopt_travel" class="aug_blue bold upper"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Quem cuidará do gato quando for viajar a trabalho ou de férias?</label>
            <input type="text" name="adopt_travel" id="adopt_travel">
        </div>
        
        <div class="col s12 m-t-10">
            <p class="bold upper aug_blue"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png">Você tem condições de acrescentar no seu orçamento os gastos que terá com alimentação de boa qualidade (aproximadamente R$ 100 por mês), vacinas e atendimento veterinário (aproximadamente R$ 200 anualmente)?</p>
            <label class="inblock"><input type="radio" name="have_monetary_conditions" id="have_monetary_conditions_yes" value="SIM" class="required" />
            Sim</label>
            <label class="inblock"><input type="radio" name="have_monetary_conditions" id="have_monetary_conditions_no" value="NAO" class="required" />
            Não</label>
        </div>

        <div class="col s12">
            <p class="bold upper aug_blue"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Alguém em casa tem alergia?</p>
            <div class="col s12 m6 l5">
                <label class="inblock">
                    <input type="radio" name="someone_has_allergy" id="someone_has_allergy_yes" value="SIM" class="required open_opt" data-pointer="open_aversion" />
                    Sim
                </label>
                <label class="inblock">
                    <input type="radio" name="someone_has_allergy" id="someone_has_allergy_no" value="NAO" class="required close_opt" data-pointer="open_aversion" />Não
                </label>
                
                <label class="inblock">
                    <input type="radio" name="someone_has_allergy" id="someone_has_allergy_dont_know" value="NAO SEI" class="required close_opt" data-pointer="open_aversion" />
                    Não sei
                </label>
            </div>  
                
            <div class="open_aversion col s12 m6 l7" style="display: none">
                <label for="aversion">A quê:</label>
                <input type="text" name="aversion" id="aversion">
            </div>
        </div>
        
        
        <div class="col s12">
            <label for="your_aversion" class="bold upper aug_blue"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> O que fará se você se descobrir alérgico a gatos?</label>
            <textarea name="your_aversion" id="your_aversion" class="required card-wrapper m-t-10 white" style="height: 12rem;"></textarea>
        </div>
        
        <div class="col s12">
            <label for="child_aversion" class="bold upper aug_blue"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> O que fará se descobrir que seu filho(a) é alérgico a gatos?</label>
            <textarea name="child_aversion" id="child_aversion" class="required card-wrapper m-t-10 white" style="height: 12rem;"></textarea>
        </div>
        
        <div class="col s12">
            <label for="mate_aversion" class="bold upper aug_blue"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> O que fará se você começar a se relacionar com uma pessoa que não gostar ou for alérgica a gatos?</label>
            <textarea name="mate_aversion" id="mate_aversion" class="required card-wrapper m-t-10 white" style="height: 12rem;"></textarea>
        </div>

        <div class="col s12">
            <label for="what_youll_do_when_someone_gets_pregnant" class="bold upper aug_blue"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> O que fará com o gatinho se alguém na casa engravidar?</label>
            <textarea name="what_youll_do_when_someone_gets_pregnant" id="what_youll_do_when_someone_gets_pregnant" class="required card-wrapper m-t-10 white" style="height: 12rem;"></textarea>
        </div>

        <div class="col s12">
            <p class="bold upper aug_blue"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> O que fará se o gato arranhar o seu filho?</p>
            <textarea name="what_youll_do_if_the_cat_scratches_your_son" id="what_youll_do_if_the_cat_scratches_your_son" class="required card-wrapper m-t-10 white" style="height: 12rem;"></textarea>
        </div>
        
        


        <div class="col s12">
            <p class="bold upper aug_blue"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> O que fará se o seu gato fugir?</p>
            <textarea name="what_youll_do_if_you_lose_your_cat" id="what_youll_do_if_you_lose_your_cat" class="required card-wrapper m-t-10 white" style="height: 12rem;" ></textarea>
        </div>

        <div class="col s12">
            <label for="what_youll_do_if_you_cant_take_care_of_the_cat_anymore" class="bold upper aug_blue"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> O que fará se não puder cuidar mais do gatinho?</label>
            <textarea name="what_youll_do_if_you_cant_take_care_of_the_cat_anymore" id="what_youll_do_if_you_cant_take_care_of_the_cat_anymore" class="required card-wrapper m-t-10 white" style="height: 12rem;"></textarea>
        </div>

        <div class="col s12">
            <label for="what_youll_do_if_you_move_from_city_or_country" class="bold upper aug_blue"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> O que fará se tiver que mudar de cidade ou país?</label>
            <textarea name="what_youll_do_if_you_move_from_city_or_country" id="what_youll_do_if_you_move_from_city_or_country" class="required card-wrapper m-t-10 white" style="height: 12rem;"></textarea>
        </div>
        
        
        <div class="col s12">
            <label for="reasons_give_back_cat" class="bold upper aug_blue"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Por quais motivos você devolveria o gatinho?</label>
            <textarea name="reasons_give_back_cat" id="reasons_give_back_cat" class="required card-wrapper m-t-10 white" style="height: 12rem;"></textarea>
        </div>
        
        
        
        <div class="col s12 open_cats">
            <p class="bold upper aug_blue"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Se você já possui um gato e está adotando um novo, está ciente que será necessária uma adaptação que pode levar de 10 dias a 1 ano, dependendo da personalidade de ambos? </p>
            <div class="col s12 m6 l5">
                <label class="inblock">
                    <input type="radio" name="adapt_time" id="adapt_time_yes" value="SIM" class="required open_opt" data-pointer="open_adapt" />
                    Sim
                </label>
                <label class="inblock">
                    <input type="radio" name="adapt_time" id="adapt_time_no" value="NAO" class="required close_opt" data-pointer="open_adapt" />Não
                </label>
            </div>  
                
            <div class="col s12 open_adapt">
                <p class="bold upper aug_blue"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Se você respondeu “sim” para a pergunta acima, tem um cômodo separado em casa caso seja necessário separá-los no começo? </p>
                <div class="col s12 m6 l5">
                    <label class="inblock">
                        <input type="radio" name="separated_room" id="separated_room" value="SIM" class="required open_opt" data-pointer="open_adapt" />
                        Sim
                    </label>
                    <label class="inblock">
                        <input type="radio" name="separated_room" id="separated_room" value="NAO" class="required close_opt" data-pointer="open_adapt" />Não
                    </label>
                </div>
            </div>
        </div>
        
        
        
        
        

        <div class="col s12">
            <p class="bold upper aug_blue"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Gatos podem viver 15 anos ou mais. Você está preparado para este compromisso?</p>

            <label class="inblock"><input type="radio" id="cats_can_live_more_than_fifteen_years_yes" name="cats_can_live_more_than_fifteen_years" value="SIM" class="required" />
            Sim</label>

            <label class="inblock"><input type="radio" id="cats_can_live_more_than_fifteen_years_no" name="cats_can_live_more_than_fifteen_years" value="NAO" class="required" />
            Não</label>

            <label class="inblock"><input type="radio" id="cats_can_live_more_than_fifteen_years_dont_know" name="cats_can_live_more_than_fifteen_years" value="NAO SEI" class="required" />
            Não sei</label>

        </div>
        
        
        <p class="bold upper aug_blue m-t-10"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Você está ciente que, em qualquer fase da vida, o gato que você está adotando pode adoecer ou desenvolver algum problema crônico de saúde, e com precisar de consultas veterinárias, exames periódicos, remédios e possivelmente internação? Você está ciente que isso pode ter um custo variável e está financeiramente preparado para assumir esse compromisso?</p>
            <div class="col s12">
                <label class="inblock col s12 m-b-0">
                <input type="radio" value="SIM" name="if_cat_gets_sick" id="if_cat_gets_sick_yes" class="required" /> Sim</label>

                <label class="inblock col s12 m-b-0">
                <input type="radio" value="NAO" name="if_cat_gets_sick" id="if_cat_gets_sick_no" class="required" /> Não</label>

                <label class="inblock col s12 m-b-0">
                <input type="radio" value="NAO SEI" name="if_cat_gets_sick" id="if_cat_gets_sick_dont_know" class="required" />
                Não sei</label>
            </div>
        
        
    </fieldset>



    <fieldset class="row">
        <legend class="upper aug_blue_bg white-text bold m-t-20" style="padding: 2px 15px; display: inline-block;">Condições</legend>
       <p class="m-t-10 bold aug_blue upper m-b-10">Você concorda...</p>
        <div>
            <div class="col s12">
                <p><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> ... que sua casa seja vistoriada para averiguação das respostas acima?</p>
                <label><input type="radio" name="house_can_be_revisited" id="house_can_be_revisited_yes" value="SIM" class="required" />
                Sim</label>
                <label><input type="radio" name="house_can_be_revisited" id="house_can_be_revisited_no" value="NAO" class="required" />
                Não</label>
            </div>


            <div class="col s12">
               <p><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> ... em nos devolver o gatinho se por qualquer motivo não puder continuar com ele?</p>
                <label><input type="radio" name="deliver_the_cat_back" id="deliver_the_cat_back_yes" value="SIM" class="required" />
                Sim</label>
                <label><input type="radio" name="deliver_the_cat_back" id="deliver_the_cat_back_no" value="NAO" class="required" />Não</label>
            </div>


            <div class="col s12">
               <p><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> ... em não repassar o gatinho a ninguém sem antes nos consultar?</p>
                <label><input type="radio" name="do_not_repass_the_cat" id="do_not_repass_the_cat_yes" value="SIM" class="required" />
                Sim</label>
                <label><input type="radio" name="do_not_repass_the_cat" id="do_not_repass_the_cat_no" value="NAO" class="required" />Não</label>
            </div>


            <div class="col s12">
               <p><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> ... em nos avisar em caso de alteração de endereço, telefone, etc?</p>

                <label><input type="radio" name="tell_us_about_address_change" id="tell_us_about_address_change_yes" value="SIM" class="required" />
                Sim</label>
                <label><input type="radio" name="tell_us_about_address_change" id="tell_us_about_address_change_no" value="NAO" class="required" />
                Não</label>
            </div>


            <div class="col s12">
               <p><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> ... em assinar um contrato de adoção no ato da entrega, responsabilizando pelos cuidados com o animal e sua segurança?</p>
                <label><input type="radio" name="sign_an_adoption_contract" id="sign_an_adoption_contract_yes" value="SIM" class="required" />
                Sim</label>
                <label><input type="radio" name="sign_an_adoption_contract" id="sign_an_adoption_contract_no" value="NAO" class="required" />
                Não</label>
            </div>
        </div>
    </fieldset>



    <fieldset class="row">
        <legend class="upper aug_blue_bg white-text bold m-t-20" style="padding: 2px 15px; display: inline-block;">Comentários</legend>
        <div class="col s12">
            <p class="aug_blue bold upper m-t-10"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Escreva neste espaço tudo o que julgar necessário, inclusive qualquer dúvida que você tiver sobre a adoção.</p>
            <textarea name="comments" id="comments" class="card-wrapper m-t-10 white" style="height: 12rem;"></textarea>
        </div>

        <div class="col s12">
            <p class="aug_blue bold upper"><img src="http://www.adoteumgatinho.com.br/media/images/red-paw.png"> Como você conheceu o AUG?</p>

            <div>
                <label><input type="checkbox" id="how_you_met_aug_friends_family" name="how_you_met_aug[]" value="AMIGO E FAMILIARES" class="required" />
                indicação de amigos e familiares</label>

                <label><input type="checkbox" id="how_you_met_aug_vets" name="how_you_met_aug[]" value="VETERINARIOS" class="required" />indicação de veterinários</label>

                <label><input type="checkbox" id="how_you_met_aug_facebook" name="how_you_met_aug[]" value="FACEBOOK" class="required" />
                pelo Facebook</label>

               <label>
                <input type="checkbox" id="how_you_met_aug_twitter" name="how_you_met_aug[]" value="TWITTER" class="required" />pelo Twitter</label>

                <label><input type="checkbox" id="how_you_met_aug_instagram" name="how_you_met_aug[]" value="INSTAGRAM" class="required" />
                pelo Instagram</label>

                <label>
                <input type="checkbox" id="how_you_met_aug_news" name="how_you_met_aug[]" value="JORNAIS" class="required" /> por matérias em jornais, revistas, rádio e TV</label>

                <label><input type="checkbox" id="how_you_met_aug_search_engines" name="how_you_met_aug[]" value="SITES DE BUSCA" class="required" />
                sites de busca</label>

                <label>
                <input type="checkbox" id="how_you_met_aug_others" name="how_you_met_aug[]" value="OUTROS" class="required" />outros</label>
            </div>
        </div>

        <div>
                <p>Não consegue enviar? Envie as respostas deste formulário para <a href="mailto:leticia@adoteumgatinho.com.br" class="aug_blue bold">leticia@adoteumgatinho.com.br</a></p>
                </div>
        <div><p style="color:#ff0000;"><strong>Este formulário será respondido em até 48hs. Contamos com a sua compreensão em aguardar este prazo. Verifique sua caixa de spam caso não receba a nossa resposta.</strong></p></div>
    </fieldset>

        <p class="msg-erro" style="padding-left: 10px; margin: 10px 0 10px 0;"><img src="http://www.adoteumgatinho.com.br/templates/public/css/images/redpaw.png" align="middle"> Campos de preenchimento obrigatório.</p>
        
        <div class="row">
           <div class="col s12 m8 l8 offset-s2 offset-l2">
                <p style="padding: 10px; margin: 10px 0 10px 0; border:#fa9319 2px solid"><strong class="aug_orange">IMPORTANTE:</strong> Abandonar, soltar, deixar fugir, não alimentar, acorrentar, bater, amedrontar e deixar acasalar indiscriminadamente são formas de maus tratos com pena prevista na lei. O Adote um Gatinho atuará conforme artigo 164 do Código Penal, artigo 32 da Lei Federal 9.605, de 12 de fevereiro de 1998 (Lei de Crimes Ambientais), e da Lei Municipal 13.131, de 18 de maio de 2001 (Lei de Posse Responsável), contra qualquer um que descumpra as determinações previstas, sejam estes adotantes ou não.  Em caso de dúvidas, busque informações e auxílios de profissionais veterinários e nunca de curiosos ou da internet.</p>
           </div>
        </div>
        
        <div class="col s12">
            <label>
            <input type="checkbox" name="policy" id="policy" /> 
            Ao selecionar a opção ENVIAR FORMULÁRIO, concordo com os 
            <a href="/politica-de-privacidade" class="aug_blue" target="_blank">Termos de Uso e Política de Privacidade</a> <sup class="red-text">*</sup></label>
        </div>

        <div class="row" style="margin-top:50px;">
            <a class="perfil bt bt_gray upper bold col s12 m2 l2 text-center" href="http://www.adoteumgatinho.com.br/quero-adotar" style="padding: 10px 15px;">Voltar</a>
<!--            <button type="reset" class="bt bt_orange col s12 m2 l3 offset-l1" id="reset">Apagar dados</button>-->
            <button type="submit" id="enviar-form" data-block="location" class="bt bt_blue white-text right upper bold col s12 m4" disabled style="float: right;">
             Enviar Formulário 
            </button>
        </div>
    </form>
  </v-container>
  
</template>

<script>
export default {

}
</script>

<style>

.texto{
  color: #f8f7f2;
  font-family: 'Cardo';
  font-size: 25px;
  text-align: justify; 
}
.titulo {
  text-align: center;
  font-family: 'Reenie Beanie', cursive;
  font-size: 80px;
  color: #f8f7f2;
}


</style>