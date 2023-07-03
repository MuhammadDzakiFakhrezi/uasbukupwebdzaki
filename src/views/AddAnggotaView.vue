<template>
    <div class="container pt-2">
        <h2 id="gotr">Tambah Anggota</h2>
   
        <table class="table table-responsive">
            <tbody>
                <tr>
                    <td id="caujk">Nomor</td>
                    <td id="olen"><input type="text" v-model="anggota.nomor" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="caujk">Nama</td>
                    <td id="olen"><input type="text" v-model="anggota.nama" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="caujk">Jenis Kelamin</td>
                    <td id="olen"><input type="text" v-model="anggota.jenis_kelamin" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="caujk">Alamat</td>
                    <td id="olen"><input type="text" v-model="anggota.alamat" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="caujk">No Hp</td>
                    <td id="olen"><input type="text" v-model="anggota.no_hp" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="caujk">Tanggal Terdaftar</td>
                    <td id="olen"><input type="date" v-model="anggota.tanggal_terdaftar" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button class="btn btn-warning" @click="tambahAnggota">Tambah</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<style>


#olen{
  background-color: #FFDE59;
  color: white;
}

#caujk{
  background-color: #3B3B3B;
  color: white;
}



#gotr{
  
  margin-left: 27rem;
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
      anggota: {
        nomor : '',
        nama: '',
        jenis_kelamin: '',
        alamat: '',
        no_hp: '',
        tanggal_terdaftar: '',
      }
    };
  },
  created() {
    
  },
  methods: {
    tambahAnggota() {
        let formData = new FormData();
        formData.append('nomor', this.anggota.nomor)
        formData.append('nama', this.anggota.nama)
        formData.append('jenis_kelamin', this.anggota.jenis_kelamin)
        formData.append('alamat', this.anggota.alamat)
        formData.append('no_hp', this.anggota.no_hp)
        formData.append('tanggal_terdaftar', this.anggota.tanggal_terdaftar)
        var bk = {};
        formData.forEach(function(value, key){
            bk[key] = value;
        });
        console.log(this.anggota)
        axios({
            method: 'post',
            url: api + 'insertAnggota.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(response => {
        // Berhasil menambahkan anggota, lakukan tindakan yang sesuai
            console.log('Anggota berhasil ditambahkan:', response.data);
            this.$router.push('/anggota');
        })
        .catch(error => {
        // Terjadi kesalahan saat menambahkan anggota, tangani kesalahan
        console.error('Gagal menambahkan anggota:', error);
        });
    }
  }
}
</script>