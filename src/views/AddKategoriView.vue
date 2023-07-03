<template>
    <div class="container pt-2">
        <h2 id="curcur">Tambah Kategori</h2>
  
        <table class="table table-responsive">
            <tbody>
                <tr>
                    <td id="ygbnr">Kode</td>
                    <td id="yaiya"><input type="text" v-model="kategori.kode" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="ygbnr">Kategori</td>
                    <td id="yaiya"><input type="text" v-model="kategori.kategori" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button class="btn btn-warning" @click="tambahKategori">Tambah</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<style>



#yaiya{
  background-color: #FFDE59;
  color: white;
}

#ygbnr{
  background-color: #3B3B3B;
  color: white;
}


#curcur{
  
  margin-left: 29rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>

<script>
import axios from 'axios';
import api from '../setting/api'

export default {
  data() {
    return {
      kategori: {
        kode : '',
        kategori: '',
      }
    };
  },
  created() {
    
  },
  methods: {
    tambahKategori() {
        let formData = new FormData();
        formData.append('kode', this.kategori.kode)
        formData.append('kategori', this.kategori.kategori)
        var bk = {};
        formData.forEach(function(value, key){
            bk[key] = value;
        });
        console.log(this.buku)
        axios({
            method: 'post',
            url: api + 'insertKategori.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(response => {
        // Berhasil menambahkan buku, lakukan tindakan yang sesuai
            console.log('Kategori berhasil ditambahkan:', response.data);
            this.$router.push('/kategori');
        })
        .catch(error => {
        // Terjadi kesalahan saat menambahkan buku, tangani kesalahan
        console.error('Gagal menambahkan kategori:', error);
        });
    }
  }
}
</script>