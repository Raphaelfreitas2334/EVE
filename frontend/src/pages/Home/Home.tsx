import EveButton from "../../components/UI/Button";
import EveCard from "../../components/UI/Card";
import EveInput from "../../components/UI/Input";
import EveLineChart from "../../components/UI/Chart/LineChart";
import EveProgress from "../../components/UI/Progress";
import EveSearch from "../../components/UI/Search";
import EveSelect from "../../components/UI/Select";
import EveAvatar from "../../components/UI/Avatar";
import EveMetric from "../../components/UI/Metric";

const Home = () => {
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <EveButton>
        Primary
      </EveButton>

      <EveButton variant="secondary">
        Secondary
      </EveButton>

      <EveButton variant="success">
        Success
      </EveButton>

      <EveButton variant="danger">
        Danger
      </EveButton>

      <EveButton variant="outline">
        Outline
      </EveButton>

      <div
          style={{
              width: "350px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "40px",
          }}
      >

          <EveInput
              label="Email"
              placeholder="Digite seu email"
          />

          <EveInput
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
          />

          <EveInput
              label="Campo com erro"
              error="Campo obrigatório"
          />

          <EveCard>

                <h2>Card do EVE</h2>

                <p>

                    Este será o componente base
                    utilizado em praticamente
                    todas as telas.

                </p>

            </EveCard>

            </div>
            <EveLineChart
              title="Matrículas"
              labels={["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]}
              data={[40,55,48,62,75,80,95,100,120,130,150,160]}
            />
            <br/>

            <EveProgress
                value={94}
                color="success"
            />

            <br/>

            <EveProgress
                value={62}
                color="warning"
            />

            <br/>

            <EveProgress
                value={18}
                color="danger"
            />
            <EveSearch
                placeholder="Pesquisar aluno..."
            />

            <EveSelect
                label="Curso"
                options={[
                    {
                        value: "ads",
                        label: "Análise e Desenvolvimento de Sistemas",
                    },
                    {
                        value: "ds",
                        label: "Data Science",
                    },
                    {
                        value: "adm",
                        label: "Administração",
                    },
                ]}
            />

            <div
                style={{
                    display:"flex",
                    gap:"20px",
                    alignItems:"center",
                }}
            >

                <EveAvatar
                    name="João Pedro"
                />

                <EveAvatar
                    name="Maria Silva"
                />

                <EveAvatar
                    name="Ana Rocha"
                    size={60}
                />

            </div>

            <EveMetric

                value="94%"

                label="Frequência"

                color="success"

            />

            <br/>

            <EveMetric

                value="8.7"

                label="Média Geral"

            />

            <br/>

            <EveMetric

                value="1.245"

                label="Alunos"

            />

            </div>
                
                
              );
            };

export default Home;