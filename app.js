
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 200;
        
        if (c < target) {
        counter.innerText = `${Math.ceil(c +
        increment)}`;
        setTimeout(updateCounter, 1);
    } else {
        counter.innerText = target;
    }
    };
    updateCounter();
});

import MosaicoAnimais from '@/components/template/MosaicoAnimais'
export default {
  components: {MosaicoAnimais},
  methods: {
    teste() {
      alert('oioioi')
    }
  },
  data() {
    return {
      reaisDoados: 10.01,
      materiaisDoados: 10
    }
  }
  
};

