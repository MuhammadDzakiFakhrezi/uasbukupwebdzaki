<template>
    <div class="container pt-2">
        <h2 id="ll">Tambah Peminjaman</h2>
      
        <table class="table table-responsive">
            <tbody>
                <tr>
                    <td id="ylh">Anggota</td>
                    <td id="yaa">
                        <select v-model="peminjaman.nomor_anggota" class="form-control">
                            <option v-for="a in anggota" :value="a.nomor">{{ a.nomor }}</option>
                        </select>  
                    </td>
                </tr>
                <tr>
                    <td id="ylh">Judul</td>
                    <td id="yaa">
                        <select v-model="peminjaman.kode_buku" class="form-control">
                            <option v-for="b in buku" :value="b.kode">{{ b.judul }}</option>
                        </select>  
                    </td>
                </tr>
                <tr>
                    <td id="ylh">Tanggal Pinjam</td>
                    <td id="yaa"><input type="date" v-model="peminjaman.tanggal_peminjaman" class="form-control"></td>
                </tr>
                <tr>
                    <td id="ylh">Tanggal Kembali</td>
                    <td id="yaa"><input type="date" v-model="peminjaman.tanggal_pengembalian" class="form-control"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button class="btn btn-warning" @click="tambahPeminjaman">Tambah</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<style>


#yaa{
  background-color: #FFDE59;
  color: white;
}

#ylh{
  background-color: #3B3B3B;
  color: white;
}



#ll{
  margin-left: 25rem;
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
      anggota: { },
      peminjaman : {},
      buku : {}
    };
  },
  created() {
    this.getAnggota();
    this.getBuku();
  },
  methods: {
    getAnggota(){
        axios.get( api + 'selectAnggota.php')
        .then(response => {
        // JSON responses are automatically parsed.
            this.anggota = [...response.data]
            console.log(this.anggota)
        })
        .catch(e => {
            this.errors.push(e)
        })
    },
    getBuku(){
        axios.get( api + 'selectBuku.php')
        .then(response => {
        // JSON responses are automatically parsed.
            this.buku = [...response.data]
            console.log(this.buku)
        })
        .catch(e => {
            this.errors.push(e)
        })
    },
    tambahPeminjaman() {
        let formData = new FormData();
        formData.append('tanggal_peminjaman', this.peminjaman.tanggal_peminjaman)
        formData.append('tanggal_pengembalian', this.peminjaman.tanggal_pengembalian)
        formData.append('nomor_anggota', this.peminjaman.nomor_anggota)
        formData.append('kode_buku', this.peminjaman.kode_buku)
        var bk = {};
        formData.forEach(function(value, key){
            bk[key] = value;
        });
        console.log(this.buku)
        axios({
            method: 'post',
            url: api + 'insertPeminjaman.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(response => {
        // Berhasil menambahkan buku, lakukan tindakan yang sesuai
            console.log('Peminjaman berhasil ditambahkan:', response.data);
            this.$router.push('/peminjaman');
        })
        .catch(error => {
        // Terjadi kesalahan saat menambahkan buku, tangani kesalahan
        console.error('Gagal menambahkan peminjaman:', error);
        });
    }
  }
}
</script>