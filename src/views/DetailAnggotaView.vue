<template>
    <div class="container pt-2">
        <h2 id="gorgor">Detail Anggota</h2>
        <!-- Tambahkan logika atau tampilan lain sesuai kebutuhan -->
        <table class="table table-responsive">
            <tbody>
                <tr>
                    <td id="cjk">ID</td>
                    <td id="cjk"><input type="text" v-model="anggota.id" id="" class="form-control" readonly></td>
                </tr>
                <tr>
                    <td id="cjk">Nomor</td>
                    <td id="cjk"><input type="text" v-model="anggota.nomor" id="" class="form-control" readonly></td>
                </tr>
                <tr>
                    <td id="cjk">Nama</td>
                    <td id="cjk"><input type="text" v-model="anggota.nama" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="cjk">Jenis Kelamin</td>
                    <td id="cjk"><input type="text" v-model="anggota.jenis_kelamin" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="cjk">Alamat</td>
                    <td id="cjk"><input type="text" v-model="anggota.alamat" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="cjk">No Hp</td>
                    <td id="cjk"><input type="text" v-model="anggota.no_hp" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td id="cjk">Tanggal Terdaftar</td>
                    <td id="cjk"><input type="date" v-model="anggota.tanggal_terdaftar" id="" class="form-control"></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                      <button class="btn btn-warning me-2" @click="updateAnggota">Update</button>
                      <button class="btn btn-warning text-light" @click="backToAnggota">Kembali</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<style>


#cjk{
  background-color: #3B3B3B;
  color: white;
}



#gorgor{
  
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
      anggota: {},
    };
  },
  created() {
    if (this.$route.params.nomor) {
        this.getDetailAnggota();
    }
  },
  methods: {
    getDetailAnggota() {
      const kode = this.$route.params.nomor;
      axios.get(api + `selectAnggotabyNomor.php?nomor=${kode}`)
        .then(response => {
          this.anggota = response.data.data;
          console.log(this.anggota)
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateAnggota() {
      let formData = new FormData();
        formData.append('id', this.anggota.id)
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
            url: api + 'updateAnggotabyNomor.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(response => {
        // Berhasil menambahkan anggota, lakukan tindakan yang sesuai
            console.log('Anggota berhasil diupdate:', response.data);
            window.location.reload();
        })
        .catch(error => {
        // Terjadi kesalahan saat menambahkan anggota, tangani kesalahan
        console.error('Gagal menambahkan anggota:', error);
        });
    },
    backToAnggota(){
      this.$router.push('/anggota');
    }
  }
}
</script>