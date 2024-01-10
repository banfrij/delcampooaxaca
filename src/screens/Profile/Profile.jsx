// Profile.jsx
import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const InfoSection = styled.div`
  margin-bottom: 20px;
  @media (min-width: 768px) {
    flex: 1;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const MapSection = styled.div`
  width: 100%;
  height: 300px;
  @media (min-width: 768px) {
    flex: 1;
    height: auto;
  }
`;
const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Section = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
`;

function Profile() {
  const position = [51.505, -0.09]; // Puedes reemplazar esto con la ubicación del usuario
  const [paymentMethod, setPaymentMethod] = React.useState('creditCard');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <ProfileContainer>
      <InfoSection>
      <Section>
          <SectionTitle>Forma de Pago</SectionTitle>
          <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
            <FormControlLabel value="creditCard" control={<Radio />} label="Tarjeta de crédito o débito" />
            <FormControlLabel value="cash" control={<Radio />} label="Efectivo" />
            <FormControlLabel value="cryptocurrency" control={<Radio />} label="Criptomoneda" />
            <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
          </RadioGroup>
        </Section>
        <Section>
          <SectionTitle>Historial de Pedidos</SectionTitle>
          {/* Aquí puedes renderizar la información del historial de pedidos */}
        </Section>
        <Section>
          <SectionTitle>Cupones</SectionTitle>
          {/* Aquí puedes renderizar la información de los cupones */}
        </Section>
        <Section>
          <SectionTitle>Otros Detalles</SectionTitle>
          {/* Aquí puedes renderizar cualquier otro detalle que desees incluir en el perfil de usuario */}
        </Section>
      </InfoSection>
      <MapSection>
        <SectionTitle>Ubicación</SectionTitle>
        <MapContainer center={position} zoom={13} style={{ height: "300px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Tu ubicación
            </Popup>
          </Marker>
        </MapContainer>
      </MapSection>
    </ProfileContainer>
  );
}

export default Profile;