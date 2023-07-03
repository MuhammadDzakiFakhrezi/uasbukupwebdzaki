<template>
    <div class="container pt-2">
        <h2 id="detelbk">Detail Buku</h2>
        <!-- Tambahkan logika atau tampilan lain sesuai kebutuhan -->
        <table class="table table-responsive">
            <tbody>
                <tr>
                    <td id="slalu">ID</td>
                    <td id="slalu"><input type="text" v-model="buku.id" id="" class="form-control" readonly></td>
                </tr>
                <tr>
                    <td id="slalu">Kode</td>
                    <td id="slalu"><input type="text" v-model="buku.kode" id="" class="form-control" readonly></td>
                </tr>
                <tr>
                    <td id="slalu">Judul</td>
                    <td id="slalu"><input type="text" v-model="buku.judul" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="slalu">Kode Kategori</td>
                    <td id="slalu"><input type="text" v-model="buku.kode_kategori" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="slalu">Penerbit</td>
                    <td id="slalu"><input type="text" v-model="buku.penerbit" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="slalu">Pengarang</td>
                    <td id="slalu"><input type="text" v-model="buku.pengarang" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="slalu">Tahun</td>
                    <td id="slalu"><input type="number" v-model="buku.tahun" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="slalu">Harga</td>
                    <td id="slalu"><input type="number" v-model="buku.harga" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="slalu">Tanggal Input</td>
                    <td id="slalu"><input type="date" v-model="buku.tanggal_input" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                      <button class="btn btn-warning me-2" @click="updateBuku">Update</button>
                      <button class="btn btn-warning text-light" @click="backToBuku">Kembali</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>


#slalu{
  background-color: #3B3B3B;
  color: white;
}

#detelbk{

margin-left: 31rem;
margin-top: 2rem;
margin-bottom: 2rem;
}</style>

<script>
import axios from 'axios';
import api from '../setting/api'

export default {
  data() {
    return {
      buku: {},
    };
  },
  created() {
    if (this.$route.params.kode) {
        this.getDetailBuku();
    }
  },
  methods: {
    getDetailBuku() {
      const kode = this.$route.params.kode;
      axios.get(api + `selectBukubyKode.php?kode=${kode}`)
        .then(response => {
          this.buku = response.data.data;
          console.log(this.buku)
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateBuku() {
      let formData = new FormData();
        formData.append('id', this.buku.id)
        formData.append('kode', this.buku.kode)
        formData.append('kode_kategori', this.buku.kode_kategori)
        formData.append('judul', this.buku.judul)
        formData.append('pengarang', this.buku.pengarang)
        formData.append('penerbit', this.buku.penerbit)
        formData.append('tahun', this.buku.tahun)
        formData.append('tanggal_input', this.buku.tanggal_input)
        formData.append('harga', this.buku.harga)
        formData.append('file_cover', this.buku.file_cover)
        var bk = {};
        formData.forEach(function(value, key){
            bk[key] = value;
        });
        console.log(this.buku)
        axios({
            method: 'post',
            url: api + 'updateBukubyKode.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(response => {
        // Berhasil menambahkan buku, lakukan tindakan yang sesuai
            console.log('Buku berhasil diupdate:', response.data);
            window.location.reload();
        })
        .catch(error => {
        // Terjadi kesalahan saat menambahkan buku, tangani kesalahan
        console.error('Gagal menambahkan buku:', error);
        });
    },
    backToBuku(){
      this.$router.push('/buku');
    }
  }
}
</script>