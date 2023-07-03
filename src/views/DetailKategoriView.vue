<template>
    <div class="container pt-2">
        <h2 id="nmj">Detail Kategori</h2>
        <!-- Tambahkan logika atau tampilan lain sesuai kebutuhan -->
        <table class="table table-responsive">
            <tbody>
                <tr>
                    <td id="lkdn">ID</td>
                    <td id="lkdn"><input type="text" v-model="kategori.id" id="" class="form-control" readonly></td>
                </tr>
                <tr>
                    <td id="lkdn">Kode</td>
                    <td id="lkdn"><input type="text" v-model="kategori.kode" id="" class="form-control" readonly></td>
                </tr>
                <tr>
                    <td id="lkdn">Kategori</td>
                    <td id="lkdn"><input type="text" v-model="kategori.kategori" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                      <button class="btn btn-warning me-2" @click="updateKategori">Update</button>
                      <button class="btn btn-warning text-light" @click="backToKategori">Kembali</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<style>

#lkdn{
  background-color: #3B3B3B;
  color: white;
}


#nmj{
  
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
      kategori: {},
    };
  },
  created() {
    if (this.$route.params.kode) {
        this.getDetailkategori();
    }
  },
  methods: {
    getDetailkategori() {
      const kode = this.$route.params.kode;
      axios.get(api + `selectKategoribyKode.php?kode=${kode}`)
        .then(response => {
          this.kategori = response.data.data;
          console.log(this.buku)
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateKategori() {
      let formData = new FormData();
        formData.append('id', this.kategori.id)
        formData.append('kode', this.kategori.kode)
        formData.append('kategori', this.kategori.kategori)
        var bk = {};
        formData.forEach(function(value, key){
            bk[key] = value;
        });
        console.log(this.buku)
        axios({
            method: 'post',
            url: api + 'updateKategoribyKode.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(response => {
        // Berhasil menambahkan buku, lakukan tindakan yang sesuai
            console.log('Kategori berhasil diupdate:', response.data);
            window.location.reload();
        })
        .catch(error => {
        // Terjadi kesalahan saat menambahkan buku, tangani kesalahan
        console.error('Gagal update kategori:', error);
        });
    },
    backToKategori(){
      this.$router.push('/kategori');
    }
  }
}
</script>