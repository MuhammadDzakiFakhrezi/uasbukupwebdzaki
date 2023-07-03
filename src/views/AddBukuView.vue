<template>
    <div class="container pt-2">
        <h2 id="tbhbk">Tambah Buku</h2>
       
        <table class="table table-responsive">
            <tbody>
                <tr>
                    <td id="pinjau">Kode</td>
                    <td id="duhcol"><input type="text" v-model="buku.kode" name="kode" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="pinjau">Judul</td>
                    <td id="duhcol"><input type="text" v-model="buku.judul" name="judul" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="pinjau">Kode Kategori</td>
                    <td id="duhcol"><input type="text" v-model="buku.kode_kategori" name="kode_kategori" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="pinjau">Penerbit</td>
                    <td id="duhcol"><input type="text" v-model="buku.penerbit" name="penerbit" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="pinjau">Pengarang</td>
                    <td id="duhcol"><input type="text" v-model="buku.pengarang" name="pengarang" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="pinjau">Tahun</td>
                    <td id="duhcol"><input type="number" v-model="buku.tahun" name="tahun" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="pinjau">Tanggal Input</td>
                    <td id="duhcol"><input type="date" v-model="buku.tanggal_input" name="tanggal_input" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="pinjau">Harga</td>
                    <td id="duhcol"><input type="number" v-model="buku.harga" name="harga" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="pinjau">Cover</td>
                    <td id="duhcol"><input type="text" v-model="buku.file_cover" name="cover" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button class="btn btn-warning" @click="tambahBuku">Tambah</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>



#duhcol{
  background-color: #FFDE59;
  color: white;
}

#pinjau{
  background-color: #3B3B3B;
  color: white;
}


#tbhbk{

margin-left: 31rem;
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
      buku: {
        kode : '',
        kode_kategori: '',
        judul: '',
        pengarang: '',
        penerbit: '',
        tahun: 0,
        tanggal_input: '',
        harga: 0,
        file_cover: '',
      }
    };
  },
  created() {
    
  },
  methods: {
    tambahBuku() {
        let formData = new FormData();
        formData.append('name', this.buku.name)
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
            url: api + 'insertBuku.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(response => {
        // Berhasil menambahkan buku, lakukan tindakan yang sesuai
            console.log('Buku berhasil ditambahkan:', response.data);
            this.$router.push('/buku');
        })
        .catch(error => {
        // Terjadi kesalahan saat menambahkan buku, tangani kesalahan
        console.error('Gagal menambahkan buku:', error);
        });
    }
  }
}
</script>