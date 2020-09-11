import axios from 'axios';

export default {
  methods: {
    mixinGetData(_url) {
      return axios.get(_url, {
        headers: {}
      })
      .then((res) => {
        console.log(res)
        return res.data;
      })
      .catch((err) => {
        console.error(err);
        return err;
      })
    }
  }
}
